const { resolve } = require('path');

module.exports = {
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    stats: {
      modules: false,
      chunks: false,
      chunckModules: false,
      timings: true,
      warnigns: false
    },
}
