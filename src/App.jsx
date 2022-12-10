import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

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

export const App = () => {
  return (
    <>
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
    </>
  );
};
