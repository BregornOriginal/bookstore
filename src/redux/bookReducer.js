import { createReducer } from '@reduxjs/toolkit';
import { addBook, deleteBook } from './books/books';

const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => ({
      ...state, books: state.books.filter((book) => book.id !== action.payload.id),
    }));
  return initialState.books;
});

export default bookReducer;
