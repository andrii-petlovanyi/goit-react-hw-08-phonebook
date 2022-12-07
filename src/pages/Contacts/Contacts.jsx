import { Heading } from '@chakra-ui/react';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  return (
    <>
      <Heading size="md" my="20px">
        Hello, this is contacts list...
      </Heading>

      <ContactList />
    </>
  );
};
