module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	env: {
		"browser": true
	},
	extends: "eslint:recommended",
	rules: {
		"indent": [2, "tab"],
		"semi": [2, "always"],
		"no-console": [1]
	},
	globals: {
		"Phaser": true
	}
};