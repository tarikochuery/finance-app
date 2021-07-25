const jwt = require("jsonwebtoken");

const ACCESS_PRIVATE_KEY = "9b589a5fc9f43c3279e3a184f78b62738794913d976d74cd72f862864b8bc09b61f882273e9a64cbfea53c18782583f4bdc842ace58411824a4b15cd0d0c6ff9";
const REFRESH_PRIVATE_KEY = "e19a6f5a3f5eb48a10670af563224094e119db49c0f722f8fba58247549d45fdf510ac135c9c9d87242e21b651a5a88074c010ad573555e31d7fffac79341168";

/**
 * @param {object} payload 
 * @param {number | string} expiresIn 
 * @returns {string}
 */
 function signAccess(payload, expiresIn) {
    return jwt.sign(payload, ACCESS_PRIVATE_KEY, {
        expiresIn
    })
}

/**
 * @param {object} payload 
 * @param {number | string} expiresIn 
 * @returns {string}
 */
 function signRefresh(payload, expiresIn) {
    return jwt.sign(payload, REFRESH_PRIVATE_KEY, {
        expiresIn
    })
}

/**
 * @param {string} token 
 * @returns {boolean}
 */
 function verifyAccess(token) {
    try {
        jwt.verify(token, ACCESS_PRIVATE_KEY)
        return true
    } catch (err) {
        return false
    }
}

/**
 * @param {string} token 
 * @returns {boolean}
 */
 function verifyRefresh(token) {
    try {
        jwt.verify(token, REFRESH_PRIVATE_KEY)
        return true
    } catch (err) {
        return false
    }
}

/**
 * @param {string} token 
 * @returns {object}
 */
function decode(token) {
    //jwt.decode retorna `null` caso o token seja inválido.
    return jwt.decode(token) ? true : false
}

/**
 * Separa o *tipo de token* do *token* definitivo.
 * @param {string} token 
 * @returns {{type: string, token: string}}
 */
function untype(token) {
    const data = token
        .trim()
        .split(" ", 2)
        .filter(v => v.length !== 0)
    ;
    return {
        type: data[0],
        token: data[1]
    }
}

module.exports = {
    signAccess,
    signRefresh,
    verifyAccess,
    verifyRefresh,
    decode,
    untype
}