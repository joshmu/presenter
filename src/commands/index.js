const { setDnd, checkDnd, toggleDnd } = require('./dnd')
const { notify } = require('./notify')
const { inZoomMeeting } = require('./inZoomMeeting')
const { set, toggle } = require('./global')
const { setHideDesktop, toggleHideDesktop } = require('./hideDesktop')

module.exports = {
  set,
  toggle,
  setDnd,
  checkDnd,
  toggleDnd,
  notify,
  inZoomMeeting,
  setHideDesktop,
  toggleHideDesktop,
}
