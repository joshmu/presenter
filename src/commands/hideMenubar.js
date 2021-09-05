const { exec } = require('../helper')

async function toggleHideMenubar({ verbose = false } = {}) {
  try {
    const { stdout } =
      await exec(`osascript -e 'tell application \"System Events\" 
      tell dock preferences to set autohide menu bar to not autohide menu bar
      end tell'`)

    if (verbose) console.log(stdout.trim())

    return true
  } catch (err) {
    // console.error(err)
    return false
  }
}

module.exports = {
  toggleHideMenubar,
}
