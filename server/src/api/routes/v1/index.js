const Express = require("express");
const authRoute = require("./auth.route");
const docsRoute = require("./docs.route");

const router = Express.Router();

// /v1/auth/
router.use("/auth", authRoute);

// /v1/docs/
router.use("/docs", docsRoute);

module.exports = router;