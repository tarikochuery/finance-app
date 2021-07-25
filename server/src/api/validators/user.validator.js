const TypeORM = require("typeorm");
const models = require("../../database/models");
const bcrypt = require("../../config/bcrypt");
const jwt = require("../../config/jwt");

/**
 * Verifica se o email existe na base de dados.  
 * Retorna `true` se o email existir e `false` se ele não existir.
 * @param {string} email 
 * @returns {Promise<boolean>}
 */
async function validateEmail(email) {
    const userRepo = TypeORM.getRepository(models.User)

    return userRepo
        .findAndCount({where: {email}})
        .then(([_, count]) => {
            if(count > 0) {
                return true
            }
            return false
        })
    ;
}

/**
 * Utilizando o `id` **OU** o `email` para verificar se a senha está correta.  
 * **Atenção**: a senha não pode estar criptografada.  
 * **Atenção**: o email **deve** ser válido.
 * @param {string} password 
 * @param {Partial<{email: string, id: string}>} object
 * @returns {Promise<boolean>}
 */
async function validatePassword(password, {email, id}) {
    const userRepo = TypeORM.getRepository(models.User)

    /** @type {TypeORM.FindOneOptions} */
    const query = {
        where: email !== undefined ? {email} : {id},
        select: ["password"]
    }

    return userRepo
        .findOne(query)
        .then(user =>
            bcrypt.compare(password, user.password)
        )
}

/**
 * Valida o token de acesso.  
 * **Atenção**: o token precisa estar com o tipo `Bearer`.
 * @param {string} accessToken 
 * @returns {Promise<boolean>}
 */
async function validateAccessToken(accessToken) {
    const { type, token } = jwt.untype(accessToken)

    if(type.toLowerCase() !== "bearer") return false
    if(!jwt.verifyAccess(token))        return false

    // Se no objeto não conter `access_token`,
    // ele fica como `undefined`.
    const { access_token } = jwt.decode(token)

    // if(undefined) => false
    if(!access_token) return false
    
    return true
}

/**
 * Valida o token de refresh.  
 * **Atenção**: o token **deve** estar com o tipo `Bearer`.
 * @param {string} refreshToken 
 * @returns {Promise<boolean>}
 */
async function validateRefreshToken(refreshToken) {
    const { type, token } = jwt.untype(refreshToken)

    if(type.toLowerCase() !== "bearer") return false
    if(!jwt.verifyRefresh(token))       return false

    // Se no objeto não conter `access_token`,
    // ele fica como `undefined`.
    const { access_token } = jwt.decode(token)

    // if(undefined) => false
    // se `access_token` for true, então ta errado.
    if(access_token) return false
    
    return true
}

module.exports = {
    validateEmail,
    validatePassword,
    validateAccessToken,
    validateRefreshToken
}