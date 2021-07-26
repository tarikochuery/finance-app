const Express = require("express");
const middlewares = require("../../middlewares");

const { validateLogin, validateRefreshToken, validateRegister } = middlewares.validate
const { login, register, refresh } = middlewares.auth

const authRoute = Express.Router();

// /v1/auth/register
authRoute.route("/register")
    .get(middlewares.status)
    .post(validateRegister, register)

// /v1/auth/login
authRoute.route("/login")
    .get(middlewares.status)
    .post(validateLogin, login)

authRoute.route("/refresh")
    .get(validateRefreshToken, refresh)

module.exports = authRoute;