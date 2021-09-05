#!/usr/bin/env node

const {
  checkDndStatus,
  disableDnd,
  enableDnd,
  notify,
  toggle,
  inZoomMeeting,
} = require('./commands')

const { COMMANDS } = require('./constants')
const {
  ON,
  OFF,
  DND_STATUS,
  DND_TOGGLE,
  DND_ENABLE,
  DND_DISABLE,
  IN_ZOOM,
  NOTIFY,
  LIST,
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
    case IN_ZOOM:
      output = (await inZoomMeeting({ verbose: true }))
        ? 'IN MEETING'
        : 'NOT IN MEETING'
      break
    case NOTIFY:
      await notify({ msg: msg || 'Hello!' })
      break
    case LIST:
    case HELP:
      console.log(`Available Commands: \n${Object.values(COMMANDS)}`)
      break
    default:
      output = await toggle()
  }

  if (output) console.log(output)
})()
