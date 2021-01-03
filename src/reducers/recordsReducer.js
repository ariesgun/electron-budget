import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addRecord } = recordsSlice.actions

export default recordsSlice.reducer