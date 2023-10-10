import { pages } from './pages';

export const navigation = [
	{
		name: 'Main',
		content: [
			{
				url: '/home',
				name: 'Home',
				description: 'Home page for the application.',
			},
		],
	},
	{
		name: 'Reports',
		content: [...pages],
	},
];
