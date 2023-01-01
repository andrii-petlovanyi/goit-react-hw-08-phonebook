import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import {
  Home,
  Contacts,
  AddContacts,
  NotFound,
  Register,
  Login,
  Layout,
} from './pages/index';
import { PrivateRoute, PublicRoute } from './components/Routs/index.js';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { refresh } from 'redux/auth/authSlice';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);

  const { data, isLoading } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) dispatch(refresh(data));
    // eslint-disable-next-line
  }, [data]);

  return (
    !isLoading && (
      <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddContacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};
