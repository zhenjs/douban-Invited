module.exports = {
	entry: {
		demo: './demo/index.js'
	},
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: 'static'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', query:{ presets: ['es2015', 'react'] }},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},
}