const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

// js loader
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // asset management
  module: {
    rules: [
      {             //1 css loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {             //2 image loader
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {             //3 font loader
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {              //4 csv-loaser
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {              //xml-loader
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test:/\.toml$/i,
        type:'json',
        parser:{
          parse:toml.parse,
        },
      },
      {
        test:/\.yaml$/i,
        type:'json',
        parser:{
          parse:yaml.parse,
        },
      },
      {
        test:/\.json5$/i,
        type:'json',
        parser:{
          parse:json5.parse,
        },
      },
    ],
  },

};
