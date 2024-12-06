import React from 'react';
import {AppNavigation} from './src/Router';
import {AppLoader} from '@/Components';
import Loader from '@/Components/AppLoader/Loader';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from '@/Redux/Store';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppNavigation />
      <AppLoader ref={ref => Loader.setLoader(ref)} />
    </PersistGate>
  </Provider>
);
