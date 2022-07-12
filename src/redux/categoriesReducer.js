import { createReducer } from '@reduxjs/toolkit';
import categoriesOfBooks from './categories/categories';
/* eslint no-param-reassign: "error" */

const initialState = {
  categories: [],
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(categoriesOfBooks, (state, action) => {
      state.categories = action.payload('UNDER CONSTRUCTION');
    });
  return initialState.categories;
});

export default categoriesReducer;
