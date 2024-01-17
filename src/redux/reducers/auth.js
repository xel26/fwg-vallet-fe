import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login : (state, action) => {
            state.token = action.payload
        },
        logout: () => {
            return initialState
        }
    }
})

export const {login, logout} = auth.actions
export default auth.reducer