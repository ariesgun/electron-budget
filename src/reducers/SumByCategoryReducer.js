import { createAction, createSlice } from '@reduxjs/toolkit';
import { addRecord } from './recordsReducer';

const initialState = {
  items: [
    {id: 0, category: "Category A", amount: "1000"}
  ]
};

export const sumByCategorySlice = createSlice({
  name: 'sumByCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRecord, (state, action) => {
      console.log(action.payload, state.items);

      const newItem = {category: action.payload.category, 
                       amount: action.payload.amount};
      state.items.push(newItem);

      console.log(state.items);
    })
    .addDefaultCase((state, action) => {console.log("This is default case for sumByCategorySlice")})
  },
})

export default sumByCategorySlice.reducer