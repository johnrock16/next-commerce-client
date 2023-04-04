import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
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
  },
});

export const { addProduct, removeProduct, setCount } = cartSlice.actions;
export default cartSlice.reducer;