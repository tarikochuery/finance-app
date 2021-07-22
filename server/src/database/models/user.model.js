const TypeORM = require("typeorm");

const User = new TypeORM.EntitySchema({
    name: "user",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            default: "uuid_generate_v4()",
            generated: true
        },
        username: {
            type: "varchar",
            length: 32,
            nullable: false
        },
        email: {
            type: "varchar",
            length: 128,
            nullable: false
        },
        password: {
            type: "char",
            length: 60,
            nullable: false
        },
        created_at: {
            type: "timestamp with time zone",
            nullable: false
        },
        updated_at: {
            type: "timestamp with time zone",
            nullable: false
        }
    }
})

module.exports = User;