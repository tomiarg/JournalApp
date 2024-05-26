import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { jounralSlice } from './journal'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: jounralSlice.reducer,
  },
})
