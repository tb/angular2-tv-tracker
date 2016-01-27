const webpack = require('webpack');
const IS_PROD = process.argv.indexOf('-p') > -1;

module.exports = {
  devtool: IS_PROD ? 'source-map' : 'eval',
  entry: {
    app: './src/index.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    filename: 'app.js'
  },
  module: {
    preLoaders: [{
      test: /\.ts$/, loader: 'tslint?emitErrors=false&failOnHint=false', exclude: /node_modules/
    }],
    loaders: [{
      test: /\.ts$/, loader: 'ts', exclude: /node_modules/
    }, {
      test: /\.scss$/, loader: 'style!css!sass'
    }],
    noParse: [
      /angular2\/bundles\/.+/,
      /rtts_assert\/src\/rtts_assert/,
      /zone\.js\/dist\/.+/
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: 'src',
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};