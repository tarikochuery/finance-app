const Express = require("express");
const controllers = require("../controllers");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function register(req, res, next) {
    const { username, email, password } = req.body;

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

    const body = controllers.auth.generateToken({id: user.id}, 86400)

    res.status(201).send(body)
}

module.exports = {
    register,
    login
}