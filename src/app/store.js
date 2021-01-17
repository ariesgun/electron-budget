import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categoriesReducer';
import accountsReducer from '../reducers/accountsReducer';
import recordsReducer from '../reducers/recordsReducer';
import sumByCategoryReducer from '../reducers/SumByCategoryReducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  categories: categoriesReducer,
  sumByCategory: sumByCategoryReducer,
  records: recordsReducer,
})

export default createStore(rootReducer);