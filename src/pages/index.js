import { lazy } from 'react';

export const Layout = lazy(() => import('./Layout/Layout'));
export const Home = lazy(() => import('./Home/Home'));
export const Login = lazy(() => import('./Login/Login'));
export const Register = lazy(() => import('./Register/Register'));
export const Contacts = lazy(() => import('./Contacts/Contacts'));
export const AddContacts = lazy(() => import('./AddContacts/AddContacts'));
export const NotFound = lazy(() => import('./404/404'));
