import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  favorite: {},
  length: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const {id, count, name, price, seller, image } = action.payload;
      const items = {...state.items, [id]:{id, count, name, price, seller, image}};

      const eventMinicartOpen = new CustomEvent('minicart/open');
      window.dispatchEvent(eventMinicartOpen);

      return {
        ...state,
        items,
        length: Object.keys(items).length
      };
    },
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

export const { addProduct, addFavorite, removeFavorite, removeProduct, setCount } = cartSlice.actions;
export default cartSlice.reducer;