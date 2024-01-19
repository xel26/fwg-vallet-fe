import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const transfer = createSlice({
    name: 'transfer',
    initialState,
    reducers: {
        setTransfer: (state, action) => {
            state.data = action.payload
        },
        removeTransfer: () => {
            return initialState
        }
    }
})

export const {setTransfer, removeTransfer} = transfer.actions
export default transfer.reducer 