const buidMyPackage = require('build-my-package')
const path = require('path')

const { buildES, buildCommonjs } = buidMyPackage

buildES({
  entry: path.join(__dirname, './src'),
  language: 'typescript'
})

buildCommonjs({
  entry: path.join(__dirname, './src'),
  language: 'typescript'
})
