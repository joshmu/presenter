const { exec } = require('../helper')
const { check_dnd_status } = require('../scripts/dnd_status')

module.exports.checkDndStatus = async () => {
  try {
    const { stdout, stderr } = await exec(check_dnd_status())
    if (stderr) throw stderr

    const status = stdout.trim() === 'true'

    console.log(status)
    return status
  } catch (err) {
    console.error(err)
  }
}
