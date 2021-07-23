const BCrypt = require("bcrypt");

const SALTS = 12;

/**
 * @param {string} password 
 */
function hash(password) {
    return BCrypt.hash(password, SALTS)
}

/**
 * @param {string} password 
 * @param {string} hashPassword 
 */
function compare(password, hashPassword) {
    return BCrypt.compare(password, hashPassword)
}

module.exports = {
    hash,
    compare
}