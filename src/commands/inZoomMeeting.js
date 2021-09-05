const { exec } = require('../helper')

module.exports.inZoomMeeting = async ({ verbose = false } = {}) => {
  try {
    const { stdout, stderr } = await exec(
      'ps aux | grep zoom.us.app/Contents/Frameworks/cpthost.app/Contents/MacOS/CptHost | grep -v grep'
    )
    if (stderr) throw stderr

    const output = stdout.trim()

    if (verbose) console.log(output)

    return Boolean(output)
  } catch (err) {
    // * error is the equivalent to not being in a meeting
    // console.error(err)
    return false
  }
}
