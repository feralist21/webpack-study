const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Nunjucks = require('nunjucks');

const fileName = ['index', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: fileName.reduce((config = {}, file) => {
    config[file] = `./pages/${file}/${file}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: (pathToFile) => {
      return pathToFile.chunk.name === 'js/[name].[contenthash]'
        ? 'js/[name].[contenthash].js'
        : 'js/[name].[contenthash].js';
    },
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@view': path.resolve(__dirname, '../src/view'),
    },
    extensions: ['.ts', '.js', '.json', '.scss'],
  },
  plugins: [].concat(
    fileName.map(
      (file) =>
        new HtmlWebpackPlugin({
          inject: 'head',
          template: `./pages/${file}/${file}.njk`,
          filename: `./${file}.html`,
          chunks: [file],
          minify: {
            html5: true,
            collapseWhitespace: true,
            removeComments: true,
            removeTagWhitespace: true,
          },
        }),
    ),
    [new MiniCssExtractPlugin()].filter(Boolean),
  ),
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              preprocessor: (content, loaderContext) => {
                let result;

                try {
                  result = Nunjucks.renderString(content);
                } catch (error) {
                  loaderContext.emitError(error);

                  return content;
                }

                return result;
              },
            },
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(ts?|js?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][hash][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
};
