const buidMyPackage = require('build-my-package')
const path = require('path')

const { buildUMD, buildES, buildCommonjs } = buidMyPackage

buildUMD({
  entry: path.join(__dirname, './src/onEnter.tsx'),
  filename: 'onEnter.js'
})

buildES({
  entry: path.join(__dirname, './src'),
  language: 'typescript'
})

buildCommonjs({
  entry: path.join(__dirname, './src'),
  language: 'typescript'
})
