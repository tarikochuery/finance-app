require("reflect-metadata");
require("./config/typeorm");
const app = require("./config/express");

app.listen(3000, () => console.log("Going on 3000"))