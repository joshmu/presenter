const { exec } = require('../helper')
const { check_dnd_status } = require('../scripts/dnd_status')
const { notify: notifyScript } = require('./notify')

module.exports.checkDndStatus = async ({ notify = false } = {}) => {
  try {
    const { stdout, stderr } = await exec(check_dnd_status())
    if (stderr) throw stderr

    const status = stdout.trim() === 'true'
    if (notify) notifyScript(status ? 'ENABLED' : 'DISABLED')
    console.log(status)
    return status
  } catch (err) {
    console.error(err)
  }
}
