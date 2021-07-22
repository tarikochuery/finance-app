const Express = require("express");
const middlewares = require("../../middlewares");
const controllers = require("../../controllers");

const authRoute = Express.Router();

// /v1/auth/register
authRoute.route("/register")
    .get(middlewares.helloWorld)
    .post(controllers.auth.register)

module.exports = authRoute;