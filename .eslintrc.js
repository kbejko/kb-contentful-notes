module.exports = {
	root: true,
	env: {
		browser: true,
		'es2021': true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier'
	],
	plugins: [
	],
	// add your custom rules here
	'rules': {
		'no-console': 'off',
		'indent': [
			2,
			'tab'
		],
		'quotes': [
			2,
			'single'
		],
		'linebreak-style': [
			2,
			'unix'
		],
		'semi': [
			2,
			'always'
		]
	},
};
