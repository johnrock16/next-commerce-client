import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';

const reducer = {
  cart: cartReducer
}

let store = configureStore({
  reducer,
});

const makeStore = ({isServer}) => {
  if (isServer) {
    return store = configureStore({
      reducer,
    });
  }
  return store;
};

export const wrapper = createWrapper(makeStore, {debug: true});