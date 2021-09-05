module.exports.in_zoom_meeting = () =>
  `ps aux | grep zoom.us.app/Contents/Frameworks/cpthost.app/Contents/MacOS/CptHost | grep -v grep`
