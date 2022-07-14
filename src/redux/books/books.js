import { createAction } from '@reduxjs/toolkit';

export const addBook = createAction('bookstore/books/ADD_BOOK');
export const deleteBook = createAction('bookstore/books/DELETE_BOOK');
