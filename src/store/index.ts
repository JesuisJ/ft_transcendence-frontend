import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import uiReducer from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,   // authSlice 연결
    ui: uiReducer,       // uiSlice 연결
  },
})

// 타입 자동 추출 (TypeScript용)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch