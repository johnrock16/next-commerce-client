import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  favorite: {},
  price: {
    total: 0,
    parcel: {
      value: 0,
      times: [1]
    }
  },
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
      let parcelTimes = [...state.price.parcel.times];
      if(parcelTimes.indexOf(price.parcel.times) === -1) {
        parcelTimes.push(price.parcel.times)
        parcelTimes.sort(function(a, b){return b - a});
      }

      window.dispatchEvent(eventMinicartOpen);
      return {
        ...state,
        items,
        price: {...state.price, total: state.price.total + price.total, parcel: { value: ((state.price.total + price.total) / parcelTimes[0]).toFixed(2), times: parcelTimes}},
        length: state.length + 1
      };
    },
    calculateCount: (state, action) => {
      const {id, quantity} = action.payload;
      const items = (state.items[id]) ? {...state.items, [id]:{...state.items[id], count: state.items[id].count + quantity}} : null;
      const parcelTimes = [...state.price.parcel.times];
      let price = (items) ? {...state.price, total: state.price.total + (items[id].price.total * quantity), parcel: { value: ((state.price.total + (items[id].price.total * quantity)) / parcelTimes[0]).toFixed(2), times: parcelTimes}} : state.price;
      if (!items[id]?.count) {
        const oldParcelTimes = items[id].price.parcel.times
        delete items[id];
        if(!Object.keys(items).some((key) => oldParcelTimes === items[key].price.parcel.times)) {
          price.parcel.times.splice(price.parcel.times.indexOf(oldParcelTimes), 1);
        }
        if(Object.keys(items).every((key) => price.parcel.times[0] > items[key].price.parcel.times)) {
          price.parcel.times.shift();
          if(price.parcel.times.length === 0) {
            price.parcel.times = [1];
          }
          price.parcel.value = (price.total / price.parcel.times[0]).toFixed(2)
        }
      }
      return {
        ...state,
        items,
        price,
        length: state.length + quantity
      };
    }
  },
});

export const { addProduct, calculateCount } = cartSlice.actions;
export default cartSlice.reducer;