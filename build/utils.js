'use strict'
const path = require('path')
const config = require('./config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}
