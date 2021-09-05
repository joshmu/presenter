const { exec } = require('../helper')
const { set_hide_desktop, hide_desktop_status } = require('../scripts')

async function setHideDesktop({ flag = true, verbose = false } = {}) {
  try {
    const { stdout, stderr } = await exec(set_hide_desktop(flag))
    if (stderr) throw stderr

    const output = flag ? 'ENABLED' : 'DISABLED'

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}

async function toggleHideDesktop({ verbose = false } = {}) {
  try {
    const { stdout } = await exec(hide_desktop_status())
    console.log({ stdout })
    const status = stdout.trim() === '1'

    const output = await setHideDesktop({ flag: !status })

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  setHideDesktop,
  toggleHideDesktop,
}
