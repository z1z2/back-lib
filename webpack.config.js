'use strict';
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    filename: 'back-lib.js',
  },
};
