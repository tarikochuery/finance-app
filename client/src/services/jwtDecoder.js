import jwt_decode from 'jwt-decode'

const decoder = {
    decode(token){
        return token ? jwt_decode(token) : null
    },
    decodeHeader(token){
        return token ? jwt_decode(token, {header: true}) : null
    }

}

export default decoder