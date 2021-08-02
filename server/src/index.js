require("reflect-metadata");
const Database = require("./config/typeorm");
const Documentation = require("./config/aglio");
const Server = require("./config/express");

Promise.resolve()
    .then(Documentation.generate)
    .then(Database.start)
    .then(Server.start)

    .catch(err => {
        console.error("\nOcorreu um erro ao iniciar o servidor")
        console.error(err)
    })
;
