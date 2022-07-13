import { createReducer } from '@reduxjs/toolkit';
import categoriesOfBooks from './categories/categories';

const initialState = {
  categories: '',
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(categoriesOfBooks, (state, action) => ({
      ...state, categories: action.payload,
    }))
    .addDefaultCase((state) => state);
});

export default categoriesReducer;
