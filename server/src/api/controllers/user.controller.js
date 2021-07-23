const TypeORM = require("typeorm");
const models = require("../../database/models");
const bcrypt = require("../../config/bcrypt");

/**
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 */
async function register(username, email, password) {
    const userRepo = TypeORM.getRepository(models.User)

    const hashedPassword = await bcrypt.hash(password)

    return userRepo.save({
        username,
        email,
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date()
    })
}

module.exports = {
    register,
}