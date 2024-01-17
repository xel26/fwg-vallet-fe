import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const register = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setregister: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {setregister} = register.actions
export default register.reducer 