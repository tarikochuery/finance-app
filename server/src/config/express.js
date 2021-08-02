const Express = require("express");
const routes = require("../api/routes/v1");
const cors = require("cors");

const PORT = 3000
const HOST = "localhost"

const app = Express();

// "Body-parser"
app.use(Express.json())
app.use(cors())

app.use("/v1", routes);

const start = async () => {
    app.listen(PORT, HOST, () => {
        console.log(`Server starting on http://${HOST}:${PORT}`)
    })
}

module.exports = {
    start
}