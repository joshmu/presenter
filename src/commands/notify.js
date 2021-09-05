const { exec } = require('../helper')
const { notify } = require('../scripts')

module.exports.notify = async ({
  msg = '',
  title = 'PRESENTER',
  verbose = false,
} = {}) => {
  try {
    const { stdout, stderr } = await exec(notify({ msg, title }))
    if (stderr) throw stderr

    const output = 'notified'

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}
