const { exec } = require('../helper')
const { notify } = require('../scripts/notify')

module.exports.notify = async msg => {
  try {
    const { stdout, stderr } = await exec(notify({ msg, title: 'PRESENTER' }))
    if (stderr) throw stderr

    const output = 'notified'
    console.log(output, stdout.trim())
    return output
  } catch (err) {
    console.error(err)
  }
}
