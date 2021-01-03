import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 0, category: "Consumption", description: "Consumption, Restaurant" },
    { id: 1, category: "Housing Rent", description: "Housing Rent" },
    { id: 2, category: "Transportation", description: "Public transport, Weekend Vrij, Travel" },
  ]
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      console.log(state, action.payload);
      state.items.push(action.payload)
    },
    deleteCategory: (state, action) => {
      state.items = state.items.filter((ele) => {
        return ele.category !== action.payload
      })
    },
    editCategory: (state, action) => {
      const { id, category, description } = action.payload
      const existingItem = state.items.find((el) => el.id == id)
      if (existingItem) {
        existingItem.category = category;
        existingItem.description = description;
      }
    }
  }
})

export const { addCategory, deleteCategory, editCategory } = categoriesSlice.actions

export default categoriesSlice.reducer