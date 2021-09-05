const { exec } = require('../helper')
const { disable_dnd } = require('../scripts/disable_dnd')

module.exports.disableDnd = async () => {
  try {
    const { stdout, stderr } = await exec(disable_dnd())
    if (stderr) throw stderr

    const output = 'disabled'
    console.log(output, stdout.trim())
    return output
  } catch (err) {
    console.error(err)
  }
}
