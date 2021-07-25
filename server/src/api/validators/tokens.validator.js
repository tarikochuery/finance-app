const Express = require("express");
const jwt = require("../../config/jwt");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
module.exports = async function(req, res, next) {
    const authorizationHeader = req.header("authorization")

    if(authorizationHeader === undefined) return headerError(res)

    const authorization = authorizationHeader.split(" ")

    const type = authorization[0]
    const token = authorization[1]

    req.token = token

    if(authorization.length !== 2) return tokenError(res)
    if(type !== "Bearer")          return tokenError(res)
    
    const check = jwt.verify(token)

    if(check) next()
    else tokenError(res)
}

/**
 * @param {Express.Response} res 
 */
function tokenError(res) {
    res.status(401).send({
        error: "invalid_client",
        error_description: "Esse token é inválido ou expirou."
    })
}

function headerError(res) {
    res.status(400).send({
        error: "without_authorization",
        error_description: "É necessário informar um token no header 'Authorization'."
    })
}