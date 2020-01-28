const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      options: {
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 3 version'],
          },
        }]],
      },
    }],
  },
}
