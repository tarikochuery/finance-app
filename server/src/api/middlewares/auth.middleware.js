const Express = require("express");
const controllers = require("../controllers");
const validators = require("../validators");
const errors = require("../errors");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function register(req, res, next) {
    const { username, email, password } = req.body;

    // TODO: validar campos de entrada
    // TODO: verificar se o email ainda não existe

    const wroteData = await controllers.user.register(username, email, password);

    res.status(201).send({
        id:         wroteData.id,
        username:   wroteData.username,
        email:      wroteData.email,
        created_at: wroteData.created_at,
        updated_at: wroteData.updated_at
    })
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function login(req, res, next) {
    const { email } = req.body

    const user = await controllers.user.getBy.email(email)

    const tokenData = controllers.auth.generateToken(
        {
            id: user.id,
            username: user.username,
            access_token: true
        },
        86400
    )

    res.status(201).send(tokenData)
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function validateLogin(req, res, next) {
    const { validateEmail, validatePassword } = validators.user
    const { emailInvalid, passwordIncorrect } = errors.auth
    const { handlePromise } = errors.APIError

    // TODO: validar se os cambos
    // {email, password} existem.
    const { email, password } = req.body

    Promise.resolve()
        .then(() => validateEmail(email))
        .then(throwErr(emailInvalid))

        .then(() => validatePassword(password, { email }))
        .then(throwErr(passwordIncorrect))

        .then(next)
        .catch(handlePromise(res))
    ;
}

function throwErr(err) {
    return async bool => {
        if(!bool) throw err
        else return
    }
}

module.exports = {
    register,
    login,
    validateLogin
}