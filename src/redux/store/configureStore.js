import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../books/books';
import categoriesReducer from '../categoriesReducer';

const rootReducer = {
  books: bookReducer.reducer,
  categories: categoriesReducer.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
