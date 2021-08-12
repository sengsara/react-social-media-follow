const path = require('path');

const cssRules = [
  { loader: 'css-loader' },
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: ['style-loader', ...cssRules]
      }
    ]
  }
}
