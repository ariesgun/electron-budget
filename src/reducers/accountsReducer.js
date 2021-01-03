import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addAccount } = accountsSlice.actions

export default accountsSlice.reducer