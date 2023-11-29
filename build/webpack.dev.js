const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    allowedHosts: 'auto',
    open: false,
    compress: true,
    port: 4321,
    hot: false,
  },
};
