import { createSlice } from '@reduxjs/toolkit';

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
      const {id, name, price, seller, image } = action.payload;
      const items = (state.items[id]) ? {...state.items, [id]:{...state.items[id], count: state.items[id].count + 1}} : {...state.items, [id]:{id, count: 1, name, price, seller, image}};
      const eventMinicartOpen = new CustomEvent('minicart/open');

      window.dispatchEvent(eventMinicartOpen);
      return {
        ...state,
        items,
        length: Object.keys(state.items).length
      };
    },
    calculateCount: (state, action) => {
      const {id, quantity} = action.payload;
      const items = (state.items[id]) ? {...state.items, [id]:{...state.items[id], count: state.items[id].count + quantity}} : null;
      if (!items[id]?.count) {
        delete items[id];
      }
      return {
        ...state,
        items,
        length: Object.keys(state.items).length
      };
    }
  },
});

export const { addProduct, calculateCount } = cartSlice.actions;
export default cartSlice.reducer;