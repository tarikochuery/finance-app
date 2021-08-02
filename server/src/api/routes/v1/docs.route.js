const Express = require("express");
const Aglio = require("../../../config/aglio");

const docsRoute = Express.Router();

docsRoute.route("/")
    .get((req, res) => res.sendFile(Aglio.buildPath, { maxAge: 86400000 }))
;

module.exports = docsRoute;