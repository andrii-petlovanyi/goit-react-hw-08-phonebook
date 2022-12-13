import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store';

const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: headers => {
      const token = store.getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['users'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
        providesTags: ['users'],
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      providesTags: ['users'],
    }),
    logOutUser: builder.mutation({
      query: token => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      providesTags: ['users'],
    }),

    getUser: builder.query({
      query: () => '/users/current',
      providesTags: ['users'],
      // providesTags: result => (result ? ['users'] : []),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = authApiSlice;

export default authApiSlice;
