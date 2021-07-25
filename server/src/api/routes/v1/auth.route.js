const Express = require("express");
const middlewares = require("../../middlewares");
const validators = require("../../validators");

const authRoute = Express.Router();

// /v1/auth/register
authRoute.route("/register")
    .get(middlewares.status)
    .post(validators.auth.register, middlewares.auth.register)

// /v1/auth/login
authRoute.route("/login")
    .get(middlewares.status)
    .post(middlewares.auth.validateLogin, middlewares.auth.login)


// /v1/auth/check-token (apenas para teste)
authRoute.route("/check-token")
    .get(validators.token, (req, res) => {
        res.send({status: ["OK", "Token válido."]})
    })

module.exports = authRoute;