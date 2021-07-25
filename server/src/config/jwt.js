const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "9b589a5fc9f43c3279e3a184f78b62738794913d976d74cd72f862864b8bc09b61f882273e9a64cbfea53c18782583f4bdc842ace58411824a4b15cd0d0c6ff9";

/**
 * @param {object} payload 
 * @param {number | string} expiresIn 
 * @returns {string}
 */
function sign(payload, expiresIn) {
    return jwt.sign(payload, PRIVATE_KEY, {
        expiresIn
    })
}

/**
 * @param {string} token 
 * @returns {boolean}
 */
function verify(token) {
    try {
        jwt.verify(token, PRIVATE_KEY)
        return true
    } catch (err) {
        switch (err.name) {
            case "JsonWebTokenError":
            case "SyntaxError":
                return false
            default:
                throw err
        }
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
    sign,
    verify,
    decode,
    untype
}