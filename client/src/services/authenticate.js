import api from "./api"


export const authenticate = {
   async login(email, password){
       try {
           const res = await api.post('/v1/auth/login',{email, password})
           localStorage.setItem('token', res.data.access_token)
           this.isAuthenticated = true
       } catch (error) {
           
       }
    },
    isLogedIn(){
        return (localStorage.getItem('token') ? true : false)
    }
}