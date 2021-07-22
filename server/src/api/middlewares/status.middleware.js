const Express = require("express");

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
module.exports = async function (req, res, next) {
    res.send({status: "ok"})
}