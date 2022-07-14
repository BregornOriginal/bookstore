import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from '../../base-api';

const initialState = {
  books: [],
  status: null,
};

const bookReducer = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default bookReducer;
