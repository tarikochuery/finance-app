const Express = require("express");
const controllers = require("../controllers");
const jwt = require("../../config/jwt");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
async function register(req, res) {
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
 */
async function login(req, res) {
    const { getBy }           = controllers.user
    const { generateTokens } = controllers.auth

    const { email } = req.body

    Promise.resolve()
        .then(()   => getBy.email(email))
        .then(user => generateTokens(user.id, user.username))

        // utilizar `res.status(200).send` diretamente
        // na função causa um erro.
        .then(body => res.status(200).send(body))
    ;
}

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
 async function refresh(req, res) {
    const { generateTokens } = controllers.auth

    const authorization = req.headers.authorization

    const { token } = jwt.untype(authorization)

    const { id, username } = jwt.decode(token)

    Promise.resolve()
        .then(() => generateTokens(id, username))

        // utilizar `res.status(200).send` diretamente
        // na função causa um erro.
        .then(body => res.status(200).send(body))
    ;
}

module.exports = {
    register,
    login,
    refresh
}