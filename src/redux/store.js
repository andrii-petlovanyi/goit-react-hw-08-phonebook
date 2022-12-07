import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import authApiSlice from './auth/authApiSlice';
import contactsApiSlice from './contacts/contactsApiSlice';
import filterSlice from './filter/filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
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
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
