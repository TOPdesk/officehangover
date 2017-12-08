const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
	entry: './src/main.js',
	output: {
		filename: '[name].[hash].js',
		path: resolve("dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src')]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"], { root: resolve(".")}),
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
		new CopyWebpackPlugin([
			{ from: 'vendor', to: 'vendor' },
			{ from: 'assets', to: 'assets' },
			{ from: 'css', to: 'css' }
		])
	]
};