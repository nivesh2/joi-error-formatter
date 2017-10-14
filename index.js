const assert = require('assert')

/**
 * Formats Joi's error.details array of messages to
 * single message seperated by comma.
 * @param {any} error 
 * @returns string
 */
function parseJoiError(error) {
  assert(error)
  if (!error instanceof Error) {
    throw new Error('error should be instanceOf Error Object')
  }
  let message = ''
  if (error.details != null && Array.isArray(error.details)) {
    message += error.details.reduce((p, v) => `${p + v.message},`, '')

    // remove extra comma
    message = message.slice(0, -1)
  } else {
    message = error.message
  }
  return message
}


module.exports = parseJoiError