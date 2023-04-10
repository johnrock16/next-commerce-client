import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';

const reducer = {
  cart: cartReducer,
  user: userReducer
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