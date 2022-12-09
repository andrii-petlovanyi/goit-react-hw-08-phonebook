import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Contacts } from './pages/Contacts/Contacts';
import { AddContacts } from './pages/AddContacts/AddContacts';
import { NotFound } from './pages/404/404';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add" element={<AddContacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
