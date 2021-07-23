const APIError = require("./APIError")

const passwordIncorrect = new APIError(401, {
    error: "invalid_password",
    error_description: "A senha está incorreta."
})

const passwordLength = new APIError(400, {
    error: "password_length",
    error_description: "A senha deve ter no mínimo 8 e no máximo 60 caracteres."
})

const emailNotFound = new APIError(404, {
    error: "email_not_found",
    error_description: "O email não existe."
})

const emailAlreadyExist = new APIError(409, {
    error: "email_already_exist",
    error_description: "O email já existe."
})

module.exports = {
    passwordIncorrect,
    emailNotFound,
    passwordLength,
    emailAlreadyExist
}