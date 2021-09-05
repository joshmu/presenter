#!/usr/bin/env node

const {
  set,
  toggle,
  checkDnd,
  setDnd,
  toggleDnd,
  setHideDesktop,
  toggleHideDesktop,
  toggleHideMenubar,
  notify,
  inZoomMeeting,
} = require('./commands')

const { COMMANDS } = require('./constants')
const {
  ON,
  OFF,
  TOGGLE,
  T,
  DND_ON,
  DND_OFF,
  DND_TOGGLE,
  DND_T,
  DND_STATUS,
  HIDE_DESKTOP_TOGGLE,
  HIDE_DESKTOP_T,
  HIDE_DESKTOP_ON,
  HIDE_DESKTOP_OFF,
  HIDE_MENUBAR_TOGGLE,
  HIDE_MENUBAR_T,
  IN_ZOOM,
  NOTIFY,
  LIST,
  HELP,
} = COMMANDS

;(async () => {
  const [, , command, msg] = process.argv

  let output

  switch (command?.toLowerCase()) {
    case ON:
      output = await set({ flag: true })
      break
    case OFF:
      output = await set({ flag: false })
      break
    case TOGGLE:
    case T:
      output = await toggle()
      break
    case DND_STATUS:
      output = (await checkDnd()) ? 'ENABLED' : 'DISABLED'
      break
    case DND_TOGGLE:
    case DND_T:
      output = await toggleDnd()
      break
    case DND_ON:
      output = await setDnd({ flag: true })
      break
    case DND_OFF:
      output = await setDnd({ flag: false })
      break
    case HIDE_DESKTOP_TOGGLE:
    case HIDE_DESKTOP_T:
      output = await toggleHideDesktop()
      break
    case HIDE_DESKTOP_ON:
      output = await setHideDesktop({ flag: true })
      break
    case HIDE_DESKTOP_OFF:
      output = await setHideDesktop({ flag: false })
      break
    case HIDE_MENUBAR_TOGGLE:
    case HIDE_MENUBAR_T:
      output = await toggleHideMenubar()
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
    default:
      console.log(`Available Commands: \n${Object.values(COMMANDS)}`)
  }

  if (output) console.log(output)
})()
