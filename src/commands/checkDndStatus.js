const { exec } = require('../helper')
const { check_dnd_status } = require('../scripts')

module.exports.checkDndStatus = async ({ verbose = false } = {}) => {
  try {
    const { stdout, stderr } = await exec(check_dnd_status())
    if (stderr) throw stderr

    const status = stdout.trim() === 'true'
    const output = status ? 'ENABLED' : 'DISABLED'

    if (verbose) console.log(output)

    return status
  } catch (err) {
    console.error(err)
  }
}
