const windowStateManager = require('electron-window-state');
const { app, BrowserWindow, ipcMain } = require('electron');
const contextMenu = require('electron-context-menu');
// const serve = require('electron-serve');
const path = require('path');
const express = require('express');

try {
	require('electron-reloader')(module);
} catch (e) {
	console.error(e);
}

// const serveURL = serve({ directory: '.' });
const port = process.env.PORT || 3000;
const dev = !app.isPackaged;
let mainWindow;

async function startServer() {
	const handlerPkg = await import('../build/handler.js');
	const { handler } = handlerPkg;
	const server = express();

	// add a route that lives separately from the SvelteKit app
	server.get('/healthcheck', (req, res) => {
		res.end('ok');
	});

	server.use(handler);

	server.listen(port, () => {
		console.log(`Server listening on port: ${port}`);
	});
}

function createWindow() {
	let windowState = windowStateManager({
		defaultWidth: 800,
		defaultHeight: 800,
	});

	const mainWindow = new BrowserWindow({
		backgroundColor: 'whitesmoke',
		titleBarStyle: 'default',
		autoHideMenuBar: false,
		trafficLightPosition: {
			x: 17,
			y: 32,
		},
		minHeight: 800,
		minWidth: 800,
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: true,
			spellcheck: false,
			devTools: true,
			preload: path.join(__dirname, 'preload.cjs'),
		},
		x: windowState.x,
		y: windowState.y,
		width: windowState.width,
		height: windowState.height,
	});

	windowState.manage(mainWindow);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('close', () => {
		windowState.saveState(mainWindow);
	});

	return mainWindow;
}

contextMenu({
	showLookUpSelection: false,
	showSearchWithGoogle: false,
	showCopyImage: false,
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Make App 💻',
		},
	],
});

function loadServer(port) {
	mainWindow?.loadURL(`http://localhost:${port}`).catch((e) => {
		console.log('Error loading URL, retrying', e);
		setTimeout(() => {
			loadServer(port);
		}, 200);
	});
}

function createMainWindow() {
	mainWindow = createWindow();
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	loadServer(port);
}

startServer();
app.once('ready', createMainWindow);
app.on('activate', () => {
	if (!mainWindow) {
		createMainWindow();
	}
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('to-main', (event, count) => {
	return mainWindow?.webContents.send('from-main', `next counts is ${count + 1}`);
});
