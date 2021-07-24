import jwt_decode from 'jwt-decode'

const decoder = {
    decode(token){
        return token ? jwt_decode(token) : undefined
    },
    decodeHeader(token){
        return token ? jwt_decode(token, {header: true}) : undefined
    }

}

export default decoder