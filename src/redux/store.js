import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'
import patientReducer from './patientSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    patient: patientReducer
  },
})
