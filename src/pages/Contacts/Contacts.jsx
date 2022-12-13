import { Divider, SimpleGrid } from '@chakra-ui/react';
import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';

import {
  Section,
  SkeletonPost,
  Filter,
  ContactList,
} from '../../components/index';

const Contacts = () => {
  const { data, isLoading } = useGetContactsQuery();

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
        {!data?.length && !isLoading && <>No contacts</>}
        {data?.length > 0 && !isLoading && <ContactList />}
      </Section>
    </>
  );
};

export default Contacts;
