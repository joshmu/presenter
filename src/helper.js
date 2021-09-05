const util = require('util')
const { exec } = require('child_process')

module.exports.exec = util.promisify(exec)
