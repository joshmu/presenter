const { exec } = require('../helper')
const { enable_dnd } = require('../scripts')

module.exports.enableDnd = async ({ verbose = false } = {}) => {
  try {
    const { stdout, stderr } = await exec(enable_dnd())
    if (stderr) throw stderr

    const output = 'ENABLED'

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}
