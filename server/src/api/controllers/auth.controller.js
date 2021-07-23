const jwt = require("../../config/jwt");

/**
 * @param {object} data
 * @param {number} expiresIn
 * @returns {{access_token: string, token_type: string, expires_in: number}}
 */
function generateToken(data, expiresIn) {
    const token = jwt.sign(data, expiresIn)

    return {
        access_token: token,
        token_type:   "Bearer",
        expires_in:   expiresIn
    }
}

module.exports = {
    generateToken
}