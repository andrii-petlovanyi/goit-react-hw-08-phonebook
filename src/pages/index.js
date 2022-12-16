import { lazy } from 'react';

export const Layout = lazy(() => import('pages/Layout'));
export const Home = lazy(() => import('pages/Home'));
export const Login = lazy(() => import('pages/Login'));
export const Register = lazy(() => import('pages/Register'));
export const Contacts = lazy(() => import('pages/Contacts'));
export const AddContacts = lazy(() => import('pages/AddContacts'));
export const NotFound = lazy(() => import('pages/404'));
