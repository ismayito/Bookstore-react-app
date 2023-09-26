import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: ((state) => {
      state.books = state.books.push({ id: 1, title: 'Entertainment', author: 'Mayito Ismail' });
    }),
    removeBooks: ((state, actions) => {
      const bookId = actions.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    }),

  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
