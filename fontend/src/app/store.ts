import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "../features/slices/pageSlice"

export const store = configureStore({
  reducer: {
    page: pageReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']