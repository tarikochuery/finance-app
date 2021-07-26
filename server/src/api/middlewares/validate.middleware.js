const Express = require("express");
const validators = require("../validators")
const errors = require("../errors");

const { handlePromise } = errors.APIError
const { validateEmail, validatePasswordIsCorrect, validatePasswordLength } = validators.user
const { emailInvalid, passwordIncorrect, authorizationInvalid, tokenInvalid, emailAlreadyExist, passwordLength } = errors.auth
const { validateAuthorizationHeader } = validators.header

const userValidateRefreshToken = validators.user.validateRefreshToken

function throwErr(err) {
    return async bool => {
        if(!bool) throw err
        else return
    }
}

function not(bool) {
    return !bool
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
 async function validateLogin(req, res, next) {

    // TODO: validar se os cambos
    // {email, password} existem.
    
    const { email, password } = req.body

    Promise.resolve()
        .then(() => validateEmail(email))
        .then(throwErr(emailInvalid))

        .then(() => validatePasswordIsCorrect(password, { email }))
        .then(throwErr(passwordIncorrect))
        
        .then(next)
        .catch(handlePromise(res))
    ;
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function validateRefreshToken(req, res, next) {

    const authorization = req.headers.authorization

    Promise.resolve()
        .then(() => validateAuthorizationHeader(authorization))
        .then(throwErr(authorizationInvalid))

        .then(() => userValidateRefreshToken(authorization))
        .then(throwErr(tokenInvalid))

        .then(next)
        .catch(handlePromise(res))
    ;
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function validateRegister(req, res, next) {
    const { email, password } = req.body;

    // TODO: validate fields

    Promise.resolve()
        .then(() => validateEmail(email))
        .then(not)
        .then(throwErr(emailAlreadyExist))

        .then(() => validatePasswordLength(password))
        .then(throwErr(passwordLength))

        .then(next)
        .catch(handlePromise(res))
    ;
}

module.exports = {
    validateLogin,
    validateRefreshToken,
    validateRegister
}