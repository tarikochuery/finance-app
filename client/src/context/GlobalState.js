import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    users: [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'}
    ]
}

// create Context
export const GlobalContext = createContext(initialState)

// Create Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={{users: state.users}}>
            {children}
        </GlobalContext.Provider>
    )
}