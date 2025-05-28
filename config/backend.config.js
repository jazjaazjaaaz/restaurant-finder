const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Nodemon = require('nodemon-webpack-plugin')
const exclude = [
  join(__dirname, '../frontend'),
]

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    main: join(__dirname, '../backend/main'),
  },
  output: {
    path: join(__dirname, '../dist/backend'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '$services': join(__dirname, '../backend/services'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Nodemon({
      script: join(__dirname, '../dist/backend/main'),
      watch: join(__dirname, '../dist/backend'),
      nodeArgs: ['-r', 'dotenv/config'],
    }),
  ],
}
