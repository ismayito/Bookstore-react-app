import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: ((state) => {
      if (state.categories.length < 0) {
        return (
          <div>
            <p>under construction</p>
          </div>
        );
      }
      return state;
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
