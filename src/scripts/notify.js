module.exports.notify = ({ msg, title = null }) =>
  `osascript -e 'display notification \"${msg}\"${
    title ? ` with title \"${title}\"` : ''
  }'`
