const TypeORM = require("typeorm");
const models = require("../database/models");

// TypeORM.createConnection({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "mysecretpassword",
//     database: "postgres",
//     synchronize: true,
//     logging: true,
//     entities: [
//         models.User
//     ]
// })

module.exports = {
    start: () => TypeORM.createConnection()
}