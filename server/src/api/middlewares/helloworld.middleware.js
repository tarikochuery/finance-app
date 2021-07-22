const Express = require("express");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
function helloWorld(req, res, next) {
    res.send({
        message: "hello world",
        random: Math.random()
    })
}

module.exports = helloWorld;