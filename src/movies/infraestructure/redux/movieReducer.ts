import { createSlice } from '@reduxjs/toolkit';
import { movieInitialState } from './movieState';

const movieSlice = createSlice({
  name: 'movie',
  initialState: movieInitialState,
  reducers: {
    dataMovie: (state, action) => {
      const { payload } = action;
      state.favorite = payload;
    }
  }
});

export const { dataMovie } = movieSlice.actions;
export default movieSlice.reducer;
