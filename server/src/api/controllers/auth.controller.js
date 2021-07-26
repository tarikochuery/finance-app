const jwt = require("../../config/jwt");

/**
 * Gera ambos access e refresh token.
 * @param {string} id 
 * @param {string} username 
 * @returns {{
 *  access_token: {
 *      token: string,
 *      expires_in: number
 *  },
 *  refreesh_token: {
 *      token: string,
 *      expires_in: number
 *  },
 *  token_type: string
 * }}
 */
function generateTokens(id, username) {
    const accessTokenData = {
        id,
        username,
        access_token: true
    }

    const refreshTokenData = {
        id,
        username,
        access_token: false
    }

    const accessTokenExpiration  = 1800   // 30 minutos
    const refreshTokenExpiration = 604800 // 1 semana

    const accessToken  = jwt.signAccess (accessTokenData,  accessTokenExpiration )
    const refreshToken = jwt.signRefresh(refreshTokenData, refreshTokenExpiration)

    return {
        access_token: {
            token: accessToken,
            expires_in: accessTokenExpiration
        },
        refresh_token: {
            token: refreshToken,
            expires_in: refreshTokenExpiration
        },
        token_type:   "Bearer"
    }
}

module.exports = {
    generateTokens
}