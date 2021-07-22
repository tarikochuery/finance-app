const TypeORM = require("typeorm");
const models = require("../../database/models");

/**
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 */
function register(username, email, password) {
    const userRepo = TypeORM.getRepository(models.User)

    return userRepo.save({
        username,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date()
    })
}

module.exports = {
    register
}