import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: ((state, actions) => {
      const booksObject = actions.payload;
      state.books.push(booksObject);
    }),
    removeBooks: ((state, actions) => {
      const bookId = actions.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    }),

  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
