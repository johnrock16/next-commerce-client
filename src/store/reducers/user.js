import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const {pid} = action.payload;
      return {
        ...state,
        favorite: {...state.favorite, [pid]:  pid}
      }
    },
    removeFavorite: (state, action) => {
      const {pid} = action.payload;
      delete state.favorite[pid];
      return state;
    }
  },
});

export const { addFavorite, removeFavorite } = userSlice.actions;
export default userSlice.reducer;