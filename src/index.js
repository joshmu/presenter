#!/usr/bin/env node

const {
  checkDndStatus,
  disableDnd,
  enableDnd,
  notify,
  toggle,
} = require('./commands')

const { COMMANDS } = require('./constants')
const {
  ON,
  OFF,
  DND_STATUS,
  DND_TOGGLE,
  DND_ENABLE,
  DND_DISABLE,
  NOTIFY,
  HELP,
} = COMMANDS

;(async () => {
  const [, , command, msg] = process.argv

  let output

  switch (command?.toLowerCase()) {
    case DND_STATUS:
      output = (await checkDndStatus()) ? 'ENABLED' : 'DISABLED'
      break
    case DND_TOGGLE:
      output = await toggle()
      break
    case ON:
    case DND_ENABLE:
      output = await enableDnd()
      break
    case OFF:
    case DND_DISABLE:
      output = await disableDnd()
      break
    case NOTIFY:
      await notify(msg || 'Hello!')
      break
    case HELP:
      console.log(`Available Commands: ${Object.values(COMMANDS)}`)
    default:
      output = await toggle()
  }

  if (output) console.log(output)
})()
