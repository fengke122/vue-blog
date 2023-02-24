const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: "./",
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "./"
    }
  }
})




