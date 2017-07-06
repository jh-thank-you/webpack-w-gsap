var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  // contentBase: path.resolve(__dirname, './assets'), // use this to load a non-dynamically created index/file (vs from memory)

  // Don't refresh if hot loading fails. Good while
  // implementing the client interface.
  hotOnly: true, // set hot: true, // If you want to refresh on errors too
  compress: true, // gZips the files
  inline: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,

  // Enable history API fallback so HTML5 History API based
  // routing works. Good for complex setups.
  historyApiFallback: true,
  noInfo: true,

  quiet: true, // turning off errors - using FriendlyErrorsWebpackPlugin - see docs

  // overlay: true captures only errors
  overlay: {
    // errors: true,
    // warnings: true,
  },
  // Reduce the amount of output.
  stats: {
    colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: true,
      chunks: false, // this removes the verbose terminal output
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false
  },
  // Parse host and port from env to allow customization.
  //
  // If you use Docker, Vagrant or Cloud9, set
  // host: options.host || '0.0.0.0';
  //
  // 0.0.0.0 is available to all network devices
  // unlike default `localhost`.
  host: process.env.HOST, // Defaults to `localhost`
  port: process.env.PORT, // Defaults to 8080
  open: true, // Will open a new browser window or tab on dev-server launch
});
server.listen(8080, 'localhost', function() {});
