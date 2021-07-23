const TypeORM = require("typeorm");
const tables = require("../tables");

class CreateUser1626929294530 {
    /**
     * @param {TypeORM.QueryRunner} queryRunner 
     */
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(tables.User)
    }

    /**
     * @param {TypeORM.QueryRunner} queryRunner 
     */
    async down(queryRunner) {
        await queryRunner.dropTable(tables.User)
    }
}

module.exports = CreateUser1626929294530;