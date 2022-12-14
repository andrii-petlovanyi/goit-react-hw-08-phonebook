import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store';

const contactsApiSlice = createApi({
  reducerPath: 'contactsApiSlice',
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
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      keepUnusedDataFor: 0,
      providesTags: ['contacts'],
    }),
    postContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    patchContact: builder.mutation({
      query: ({ contactId, patchedContacts }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: patchedContacts,
      }),
      invalidatesTags: ['contacts'], // subscription to updates
    }),
  }),
});

export const {
  useGetContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
  usePatchContactMutation,
} = contactsApiSlice;

export default contactsApiSlice;
