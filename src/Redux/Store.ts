import {combineReducers, configureStore, Tuple} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';

import UserSlice from './Reducers/UserSlice';

import EventsSlice from './Reducers/EventsSlice';
import StorageMMKV from '@/Theme/StorageMMKV';

const tuple = new Tuple(thunk);

if (__DEV__) {
  tuple.concat(logger);
}

const rootReducer = combineReducers({
  user: UserSlice,
  events: EventsSlice,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: StorageMMKV,
  },
  rootReducer,
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => tuple,
});
export const persistor = persistStore(store);
