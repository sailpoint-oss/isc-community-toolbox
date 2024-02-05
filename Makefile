bump:
	npm version patch --prefix Electron-App
	npm version patch --prefix Sveltekit-App
	npm version patch --prefix Sveltekit-Build
	npm version patch

install:
	npm install --prefix Electron-App
	npm install --prefix Sveltekit-App

update:
	npm update --save --prefix Electron-App
	npm update --save --prefix Sveltekit-App

dev:
	npm run dev --prefix Sveltekit-App

build:
	npm build --prefix Electron-App
	npm build --prefix Sveltekit-App
	