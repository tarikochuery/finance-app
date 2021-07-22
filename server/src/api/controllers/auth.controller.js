const Express = require("express");
const userController = require("./user.controller");

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

    const wroteData = await userController.register(username, email, password);

    res.send(wroteData)
}

module.exports = {
    register
}