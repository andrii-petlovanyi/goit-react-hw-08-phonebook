// import { Heading } from '@chakra-ui/react';

import { Divider, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';
import filterSelectors from '../../redux/filter/filterSelectors';

import {
  Section,
  SkeletonPost,
  Filter,
  ContactList,
} from '../../components/index';

const Contacts = () => {
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
      <Section delay={0.1}>
        <Filter />
        <Divider mb="20px" mx="auto" w="70%" />
      </Section>
      <Section delay={0.3}>
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
      </Section>
    </>
  );
};

export default Contacts;
