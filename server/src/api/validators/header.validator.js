const jwt = require("../../config/jwt");

/**
 * Verifica se o header 'Authorization' está correto.
 * @param {string} authorization 
 * @returns {Promise<boolean>}
 */
async function validateAuthorizationHeader(authorization) {
    if(authorization === undefined) return false

    const { type, token } = jwt.untype(authorization)

    if(type === undefined || token === undefined) return false
    if(type.toLowerCase() !== "bearer" )          return false

    return true
}

module.exports = {
    validateAuthorizationHeader
}