var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './js/app.js',
	output: { path: __dirname, filename: 'app.js' },
	devtool: 'eval',
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'css-loader',
					'css!sass'
				)
			}
		]
	},
	plugins: [
        new ExtractTextPlugin("screen.css",{
        	allChunks: true
        })
    ]
};