const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const exclude = [
  join(__dirname, '../backend'),
]

module.exports = {
  mode: 'development',
  entry: {
    main: join(__dirname, '../frontend/main'),
  },
  output: {
    path: join(__dirname, '../dist/frontend'),
    filename: 'scripts/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': join(__dirname, '../frontend'),
      '@components': join(__dirname, '../frontend/components'),
      '@styles': join(__dirname, '../frontend/assets/styles'),
      '@services': join(__dirname, '../frontend/services'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'sass-loader',
        ],
        exclude,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, '../frontend/main.html'),
      filename: join(__dirname, '../dist/frontend/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      ignoreOrder: false,
    })
  ],
}
