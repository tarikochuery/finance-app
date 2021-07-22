const Express = require("express");
const authRoute = require("./auth.route");

const router = Express.Router();

// /v1/auth/
router.use("/auth", authRoute);

module.exports = router;