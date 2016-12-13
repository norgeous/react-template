var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var exec = require('child_process').exec

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {

	if (err) {
		return console.log(err);
	}

	console.log('Listening at http://0.0.0.0:3000/');

	exec('start chrome http://localhost:3000' , function(err) {

		if(err) {
			console.log(err)
		} else {
			console.log("chrome opened")
		}

	})

});