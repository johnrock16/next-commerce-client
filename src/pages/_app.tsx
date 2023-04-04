import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {AppProps} from 'next/app';
import { appWithTranslation } from 'next-i18next'
import {wrapper} from '../store';
import '../styles/main.scss';
import Head from 'next/head';

const MyApp: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <title>Next E-commerce</title>
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default appWithTranslation(MyApp);