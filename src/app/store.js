import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categoriesReducer';
import accountsReducer from '../reducers/accountsReducer';
import recordsReducer from '../reducers/recordsReducer';

export default configureStore({
  reducer: {
    accounts: accountsReducer,
    categories: categoriesReducer,
    records: recordsReducer
  }
});