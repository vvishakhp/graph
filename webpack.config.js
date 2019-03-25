var path = require('path');

var env = {
  dev: true
}

module.exports = {
  mode: env.dev ? 'development' : 'production',
  entry: './src/ts-graph',
  devtool: 'inline-source-map',
  output: {
    filename: 'ts-graph.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.xml$/i,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.xml']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};