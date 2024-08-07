const path = require('path')

module.exports = {
  entry: './src/script.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'development', // Mode (can be 'production' for optimized builds)
  module: {
    rules: [
      {
        test: /\.css$/,
      }
      // You can add rules here for other types of files (e.g., CSS, images)
    ]
  }
}
