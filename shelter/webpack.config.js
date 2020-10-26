const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main/js/main.js',
  output: {
    filename: 'script.js',
    path: path.join(__dirname, 'shelter/pages/main'),
  },
  devtool: 'source-map',
};

// module.exports = {
//   mode: 'development',
//   entry: './src/pets/js/pets.js',
//   output: {
//     filename: 'script.js',
//     path: path.join(__dirname, 'shelter/pages/pets'),
//   },
//   devtool: 'source-map',
// };
