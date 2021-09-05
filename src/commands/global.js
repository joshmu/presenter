const { setDnd, checkDnd } = require('./dnd')
const { setHideDesktop } = require('./hideDesktop')

async function set({ flag = true, verbose = false } = {}) {
  try {
    await setDnd({ flag, verbose })
    await setHideDesktop({ flag, verbose })
  } catch (err) {
    console.error(err)
  }
}

async function toggle({ verbose = false } = {}) {
  try {
    // * use DND as the toggle definition to align all other plugins
    const status = await checkDnd({ verbose })

    await setDnd({ flag: !status, verbose })
    await setHideDesktop({ flag: status, verbose })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  set,
  toggle,
}
