// import { Heading } from '@chakra-ui/react';

import { Divider } from '@chakra-ui/react';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApiSlice';
import filterSelectors from 'redux/filter/filterSelectors';

export const Contacts = () => {
  const { data, isFetching, isLoading } = useGetContactsQuery();
  const filter = useSelector(filterSelectors.getFilterValue);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!data) return;
    return Object.values(data).filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };
  return (
    <>
      {/* <Heading size="md" my="20px">
        Hello, this is contacts list...
      </Heading> */}
      <Filter />
      <Divider mb="20px" mx="auto" w="70%" />
      {<ContactList contacts={filteredContacts()} />}
    </>
  );
};
