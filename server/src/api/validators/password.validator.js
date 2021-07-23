const Express = require("express");
const controllers = require("../controllers");
const BCrypt = require("../../config/bcrypt");

/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
module.exports = async function(req, res, next) {
    const { email, password } = req.body;

    const user = await controllers.user.getBy.email(email)

    const passwordCheck = await BCrypt.compare(password, user.password)

    if(passwordCheck) next()
    else res.status(400).send({
        error: "invalid_grant",
        error_description: "A senha está incorreta."
    })
}
