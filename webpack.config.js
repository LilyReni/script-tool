var webpack = require('webpack');
var path = require('path');

//bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public');

//application's codebase
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/components/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx','.json'] 
	},
	module : {
		rules: [
		{
			test: /\.js(x)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				//!!!leave it blank for now
				options: {

				}
			}
		}
		]
	}
}; 

module.exports = config;