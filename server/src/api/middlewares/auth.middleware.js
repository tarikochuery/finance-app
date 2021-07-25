const Express = require("express");
const controllers = require("../controllers");

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

    const user = await controllers.user.getBy.email(email)

    // TODO: validar se email existe

    const tokenData = controllers.auth.generateToken({id: user.id, username: user.username}, 86400)

    res.status(201).send(tokenData)
}

module.exports = {
    register,
    login
}