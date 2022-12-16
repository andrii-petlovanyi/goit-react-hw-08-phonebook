import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';
import authApiSlice from 'redux/auth/authApiSlice';
import contactsApiSlice from 'redux/contacts/contactsApiSlice';
import filterSlice from 'redux/filter/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  authApiSlice.middleware,
  contactsApiSlice.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
