const Express = require("express");

module.exports = class APIError extends Error {
    /**
     * @param {number} statusCode
     * @param {{error: string, error_description: string} & Object<string, any>} errorBody
     */
    constructor(statusCode, errorBody) {
        super(errorBody.error_description)
        
        this.name = "APIError"
        this.message = errorBody.error_description
        this.code = statusCode

        this.errorBody = errorBody
    }

    /**
     * @param {Express.Response} res 
     * @param {APIError} error 
     */
    static async handle(res, error) {
        return res.status(error.code).json(error.errorBody)
    }
}