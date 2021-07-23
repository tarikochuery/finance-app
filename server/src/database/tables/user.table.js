const TypeORM = require("typeorm");

const User = new TypeORM.Table({
    name: "user",
    columns: [
        {
            name: "id",
            type: "uuid",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true
        },
        {
            name: "username",
            type: "varchar",
            length: 32,
            isNullable: false
        },
        {
            name: "email",
            type: "varchar",
            length: 128,
            isNullable: false
        },
        {
            name: "password",
            type: "char",
            length: 60,
            isNullable: false
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
            isNullable: false
        },
        {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
            isNullable: false
        }
    ]
})

module.exports = User;