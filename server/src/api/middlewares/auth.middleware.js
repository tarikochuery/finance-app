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
}

module.exports = {
    register,
}