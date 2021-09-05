const { exec } = require('../helper')
const { disable_dnd, enable_dnd, check_dnd_status } = require('../scripts')

async function setDnd({ flag = true, verbose = false } = {}) {
  try {
    const { stdout, stderr } = await exec(flag ? enable_dnd() : disable_dnd())
    if (stderr) throw stderr

    const output = flag ? 'ENABLED' : 'DISABLED'

    if (verbose) console.log(output, stdout.trim())

    return output
  } catch (err) {
    console.error(err)
  }
}

async function checkDnd({ verbose = false } = {}) {
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

async function toggleDnd({ verbose = false } = {}) {
  try {
    const status = await checkDnd({ verbose })
    const output = await setDnd({ flag: !status, verbose })

    if (verbose) console.log(output)

    return output
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  setDnd,
  checkDnd,
  toggleDnd,
}
