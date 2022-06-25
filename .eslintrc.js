module.exports = {
	env: {
		browser: false,
		es2021: true,
		mocha: true,
		node: true,
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"standard",
		"plugin:node/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		"prettier/prettier": "error",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"node/no-unsupported-features/es-syntax": [
			"error",
			{ ignores: ["modules"] },
		],
		camelcase: ["error", { ignoreImports: true }],
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
		node: {
			tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
		},
	},
};
