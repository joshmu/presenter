const { checkDndStatus } = require('./commands/checkDndStatus')
const { disableDnd } = require('./commands/disableDnd')
const { enableDnd } = require('./commands/enableDnd')
const { notify } = require('./commands/notify')
const { COMMANDS } = require('./constants')
const { DND_STATUS, DND_TOGGLE, DND_ENABLE, DND_DISABLE, NOTIFY, HELP } =
  COMMANDS

;(async () => {
  const [, , command] = process.argv

  let output

  switch (command.toLowerCase()) {
    case DND_STATUS:
      output = await checkDndStatus({ notify: true })
      break
    case DND_TOGGLE:
      output = (await checkDndStatus()) ? await disableDnd() : await enableDnd()
      break
    case DND_ENABLE:
      output = await enableDnd()
      break
    case DND_DISABLE:
      output = await disableDnd()
      break
    case NOTIFY:
      await notify('Hello!')
      break
    case HELP:
    default:
      console.log(`Available Commands: ${Object.values(COMMANDS)}`)
  }

  if (output) notify(output)
})()
