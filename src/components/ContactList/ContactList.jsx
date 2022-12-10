import { SimpleGrid } from '@chakra-ui/react';
import { ContactListItem } from '../index';

export const ContactList = ({ contacts = [] }) => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </SimpleGrid>
    </>
  );
};
