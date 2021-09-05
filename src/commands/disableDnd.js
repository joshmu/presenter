const { exec } = require('../helper')
const { disable_dnd } = require('../scripts')

module.exports.disableDnd = async ({ verbose = false } = {}) => {
  try {
    const { stdout, stderr } = await exec(disable_dnd())
    if (stderr) throw stderr

    const output = 'DISABLED'

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}
