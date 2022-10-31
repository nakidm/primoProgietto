import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const counterSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.card = [...state.items, action.payload]
        },
        removeFromCard: (state) => {
            state.items -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCard, removeFromCard } = counterSlice.actions
export const selectCard = (state) => state.card.items

export default counterSlice.reducer