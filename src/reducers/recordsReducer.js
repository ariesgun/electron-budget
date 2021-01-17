import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 0, date: "12/02/2020", record: "Belanja AH", category: "Consumption", account: "Rabobank EUR", amount: 15 },
    { id: 1, date: "13/02/2020", record: "Invest Peak", category: "Investment", account: "Rabobank EUR", amount: 55 },
    { id: 2, date: "14/02/2020", record: "Housing Rent", category: "Housing Rent", account: "Rabobank EUR", amount: 375 },
    { id: 3, date: "15/02/2020", record: "Belanja AH", category: "Consumption", account: "Rabobank EUR", amount: 20 },
    { id: 4, date: "16/02/2020", record: "Belanja AH", category: "Consumption", account: "Rabobank EUR", amount: 30 }
  ]
};

export const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      console.log("Hey")
      state.items.push(action.payload)
    },
    deleteRecord: (state, action) => {
      state.items = state.items.filter((ele) => {
        return ele.id !== action.payload
      })
    },
    editRecord: (state, action) => {
      const { id, date, record, category, account, amount } = action.payload
      const existingItem = state.items.find((el) => el.id == id)
      if (existingItem) {
        existingItem.date = date;
        existingItem.record = record;
        existingItem.category = category;
        existingItem.account = account;
        existingItem.amount = amount;
      }
    }
  }
})

export const { addRecord, deleteRecord, editRecord } = recordsSlice.actions

export default recordsSlice.reducer