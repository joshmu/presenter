const { checkDndStatus } = require('./checkDndStatus')
const { disableDnd } = require('./disableDnd')
const { enableDnd } = require('./enableDnd')

module.exports.toggle = async ({ verbose = false } = {}) => {
  try {
    const status = await checkDndStatus({ verbose })
    const output = await (status
      ? disableDnd({ verbose })
      : enableDnd({ verbose }))

    if (verbose) console.log(output)

    return output
  } catch (err) {
    console.error(err)
  }
}
