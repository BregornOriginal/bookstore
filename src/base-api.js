import { createAsyncThunk } from '@reduxjs/toolkit';

export const myBookstoreApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jlFnXWgXTgySgXTsONFO';

const createBookList = (obj) => {
  const result = [];
  const keys = Object.keys(obj);

  keys.forEach((item) => {
    result.push({
      author: obj[item][0].author,
      id: item,
      category: obj[item][0].category,
      title: obj[item][0].title,
    });
  });
  return result;
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(`${myBookstoreApi}/books`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    console.log(createBookList(data));
    return createBookList(data);
  },
);

export const addBooksAsync = createAsyncThunk(
  'books/addBooks',
  async (payload, thunkAPI) => {
    fetch(`${myBookstoreApi}/books`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    thunkAPI.dispatch(getBooks());
  },
);

export const deleteBooksAsync = createAsyncThunk(
  'books/deleteBooks',
  async (payload, thunkAPI) => (
    fetch(`${myBookstoreApi}/books/${payload}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: payload }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      thunkAPI.dispatch(getBooks());
    })
  ),
);
