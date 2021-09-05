const { exec } = require('../helper')
const { enable_dnd } = require('../scripts/enable_dnd')

module.exports.enableDnd = async () => {
  try {
    const { stdout, stderr } = await exec(enable_dnd())
    if (stderr) throw stderr

    const output = 'enabled'
    console.log(output, stdout.trim())
    return output
  } catch (err) {
    console.error(err)
  }
}
