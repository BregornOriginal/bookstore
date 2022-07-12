import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from '../bookReducer';
import categoriesReducer from '../categoriesReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

store.dispatch(bookReducer);

export default store;
