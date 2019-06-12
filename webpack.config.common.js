const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minimum-Viable',
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ],
          },
        },
        exclude: /node_modules/,
      },
	    {
		    test: /\.(jpe?g|png|gif)$/,
		    use: [
			    {
				    loader: 'file-loader',
						options: {
					    name: '[name].[ext]',
							outputPath: 'images/',
					    publicPath: 'app/images/'
				    }
			    }
		    ]
	    },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
};
