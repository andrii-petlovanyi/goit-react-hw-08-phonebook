// import { Heading } from '@chakra-ui/react';

import { Divider, SimpleGrid } from '@chakra-ui/react';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { SkeletonPost } from '../../components/Loaders/SkeletonPost';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';
import filterSelectors from '../../redux/filter/filterSelectors';

export const Contacts = () => {
  const { data, isLoading } = useGetContactsQuery();

  const filter = useSelector(filterSelectors.getFilterValue);


  //
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!data) return;
    return Object.values(data).filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };
  return (
    <>
      <Filter />
      <Divider mb="20px" mx="auto" w="70%" />
      {isLoading && (
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
        </SimpleGrid>
      )}
      {!data && !isLoading && <>some text</>}
      {data && <ContactList contacts={filteredContacts()} />}
    </>
  );
};
