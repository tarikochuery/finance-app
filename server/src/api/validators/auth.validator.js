const Express = require("express");
const controllers = require("../controllers");
const errors = require("../errors");
const { APIError } = require("../errors");
const BCrypt = require("../../config/bcrypt");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function register(req, res, next) {
    const { username, email, password } = req.body;

    // TODO: validate fields



    // validate email
    const hasEmail = await controllers.user.hasEmail(email)
    if(hasEmail) return APIError.handle(res, errors.auth.emailAlreadyExist)

    next()
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function login(req, res, next) {
    const { email, password } = req.body;

    // TODO: validate fields



    // validate email
    const hasEmail = await controllers.user.hasEmail(email)
    if(!hasEmail) return APIError.handle(res, errors.auth.emailNotFound)

    // validate password
    const user = await controllers.user.getBy.email(email)
    const passwordCheck = await BCrypt.compare(password, user.password)
    if(!passwordCheck) return APIError.handle(res, errors.auth.passwordIncorrect)

    next()
}

module.exports = {
    register,
    login
}