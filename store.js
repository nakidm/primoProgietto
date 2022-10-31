import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './src/redux/counterSlice'

export const store = configureStore({
    reducer: {
        card: counterSlice
    },
})