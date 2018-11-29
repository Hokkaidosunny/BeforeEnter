const buidMyPackage = require('build-my-package')
const path = require('path')

const { buildUMD, buildES, buildCommonjs } = buidMyPackage

buildUMD({
  entry: path.join(__dirname, './src/onEnter.js'),
  mode: 'development',
  output: {
    filename: 'onEnter.js'
  }
})

buildES({
  entry: path.join(__dirname, './src')
})

buildCommonjs({
  entry: path.join(__dirname, './src')
})
