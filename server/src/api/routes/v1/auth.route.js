const Express = require("express");
const middlewares = require("../../middlewares");

const authRoute = Express.Router();

// /v1/auth/register
authRoute.route("/register")
    .get(middlewares.status)
    .post(middlewares.auth.register)

module.exports = authRoute;