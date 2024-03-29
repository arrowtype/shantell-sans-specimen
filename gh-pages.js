import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/arrowtype/shantell-sans-specimen',
		user: {
			name: 'ArrowType', // update to use your name
			email: 'arrowtypeco@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
