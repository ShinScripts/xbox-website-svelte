/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				xbox: '#47FF47',
				primary: '#292929',
				secondary: '#b8b8b8',
				'nav-primary': '#141414',
			},
		},
	},
	plugins: [],
};
