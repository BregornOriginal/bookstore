import { createReducer } from '@reduxjs/toolkit';
import categoriesOfBooks from './categories/categories';

const initialState = {
  categories: [],
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(categoriesOfBooks, (state, action) => {
      action.payload('UNDER CONSTRUCTION');
    });
  return initialState.categories;
});

export default categoriesReducer;
