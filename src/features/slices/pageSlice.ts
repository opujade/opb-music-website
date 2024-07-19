import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


// Define the initial state using that type
const initialState = {
  value: ""
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.page.value
