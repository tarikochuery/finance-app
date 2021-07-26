const APIError = require("./APIError")

// TODO: implementar à APIError possibilidade de
// passar header (código 401 deve retornar WWW-Authenticate)
const passwordIncorrect = new APIError(400, {
    error: "invalid_password",
    error_description: "A senha está incorreta."
})

const passwordLength = new APIError(400, {
    error: "password_length",
    error_description: "A senha deve ter no mínimo 8 e no máximo 60 caracteres."
})

const emailAlreadyExist = new APIError(409, {
    error: "email_already_exist",
    error_description: "O email já existe."
})

const emailInvalid = new APIError(400, {
    error: "invalid_email",
    error_description: "O email é inválido ou não existe."
})

const tokenInvalid = new APIError(400, {
    error: "invalid_token",
    error_description: "O token é inválido ou expirou."
})

const authorizationInvalid = new APIError(400, {
    error: "invalid_header",
    error_description: "O header 'Authorization' não foi encontrado ou é inválido."
})

module.exports = {
    passwordIncorrect,
    passwordLength,
    emailAlreadyExist,
    tokenInvalid,
    emailInvalid,
    authorizationInvalid
}