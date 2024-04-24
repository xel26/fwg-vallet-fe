import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const verifyPin = createSlice({
    name: 'verifyPin',
    initialState,
    reducers: {
        setVerifyPin: (state, action) => {
            state.data = action.payload
        },
        removeVerifyPin: () => {
            return initialState
        }
    }
})

export const {setVerifyPin, removeVerifyPin} = verifyPin.actions
export default verifyPin.reducer 