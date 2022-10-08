import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse( localStorage.getItem('user') )

const initialState = {
    user: user ? user : null,
    logged: user ? true : false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
     login: ( state, { payload } ) => {
       state.user= payload
       state.logged= true
     },

     logout: ( state ) => {
        state.user= null,
        state.logged= false
     }


    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions