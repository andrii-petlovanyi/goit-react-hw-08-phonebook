import { SimpleGrid } from '@chakra-ui/react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
      </SimpleGrid>
    </>
  );
};
