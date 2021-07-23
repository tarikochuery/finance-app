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

/**
 * Verifica se o email existe na base de dados
 * @param {string} email 
 * @returns {Promise<boolean}
 */
async function hasEmail(email) {
    const userRepo = TypeORM.getRepository(models.User)

    return userRepo.findAndCount({
        where: {
            email
        }
    }).then(([_, count]) => count > 0)
}

const getBy = {
    /**
     * @param {string} id 
     */
    id: async (id) => {
        return TypeORM.getRepository(models.User).findOne({
            where: { id }
        })
    },
    /**
     * @param {string} email 
     */
    email: async (email) => {
        return TypeORM.getRepository(models.User).findOne({
            where: { email }
        })
    },
    /**
     * @param {string} username 
     */
    username: async (username) => {
        return TypeORM.getRepository(models.User).findOne({
            where: { username }
        })
    }
}

module.exports = {
    register,
    getBy,
    hasEmail
}