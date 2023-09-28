import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: {},
  isLoading: false,
  error: null,
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/snHVDBK02Z7mOHfIcM9N/books';
export const fetchBooks = createAsyncThunk('books/fetchBooks', () => {
  const response = axios.get(url).then((response) => response.data);
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: ((state, actions) => {
      const booksObject = actions.payload;
      const id = booksObject.item_id;
      state.books[id] = [booksObject];
    }),
    removeBooks: ((state, actions) => {
      const bookId = actions.payload;
      const newBooks = { ...state.books };
      delete (newBooks[bookId]);
      state.books = newBooks;
    }),
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addBooks, removeBooks, extraReducers } = booksSlice.actions;

export default booksSlice.reducer;
