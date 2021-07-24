import { useContext } from 'react'
import { authContext } from '../providers/AuthProvider'

function useAuth() {
    return useContext(authContext)
}

export default useAuth
