const Express = require("express");
const controllers = require("../controllers");

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
async function register(req, res, next) {
    const {
        username,
        email,
        password
    } = req.body;

    const wroteData = await controllers.user.register(username, email, password);

    res.send(wroteData)
}

module.exports = {
    register
}