const Express = require("express");
const routes = require("../api/routes/v1");
const cors = require("cors");

const app = Express();

// "Body-parser"
app.use(Express.json())
app.use(cors())

app.use("/v1", routes);

module.exports = app;