const path = require('path');

module.exports = {
  entry: './src/index.js',  // Make sure the entry file path is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Use path.resolve to properly resolve the path
  },
  mode: 'none',  // This is fine, but you can consider using 'development' or 'production' based on your needs
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,  // Corrected the regex for image files
        use: ['file-loader']    // Properly closed the use array
      }
    ]
  }
};

