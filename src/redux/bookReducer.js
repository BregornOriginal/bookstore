import { createReducer } from '@reduxjs/toolkit';
import { addBook, deleteBook } from './books/books';

const initialState = {
  books: [{
    title: 'The lord of the rings',
    author: 'J. R. R. Tolkien',
  },
  {
    title: 'World of Warcraft',
    author: 'Matt Burns',
  }],
};

const bookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    });
  return initialState.books;
});

export default bookReducer;
