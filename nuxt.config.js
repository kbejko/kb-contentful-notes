export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'kb-contentful-notes',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/contentful' },
		{ src: '~/plugins/notes' }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	publiceRuntimeConfig: {
		contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
		contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	},

	privateRuntimeConfig: {
		contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
};
