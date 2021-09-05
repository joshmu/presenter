const { checkDndStatus } = require('./commands/checkDndStatus');
const { disableDnd } = require('./commands/disableDnd');
const { enableDnd } = require('./commands/enableDnd')
const { COMMANDS } = require('./constants')
const { DND_STATUS, DND_ENABLE, DND_DISABLE, HELP } = COMMANDS

;(async () => {
  const [, , command] = process.argv

  switch (command.toLowerCase()) {
    case DND_STATUS:
      await checkDndStatus()
      break
    case DND_ENABLE:
      await enableDnd()
      break
    case DND_DISABLE:
      await disableDnd()
      break
    case HELP:
    default:
      console.log(`Available Commands: ${Object.values(COMMANDS)}`)
  }
})()
