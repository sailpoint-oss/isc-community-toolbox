import { reports } from './reports';

export const navigation = [
	{
		name: 'Main',
		content: [
			{
				url: '/home',
				name: 'Home',
				description: 'Home page for the application.',
			},
			{
				url: '/home/sources',
				name: 'Sources',
				description: 'a list of Sources in IdentityNow.',
			},
		],
	},
	{
		name: 'Reports',
		content: [...reports],
	},
];
