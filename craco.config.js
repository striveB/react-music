const path = require('path')
const CracoLess = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
