// import { Heading } from '@chakra-ui/react';
import { SimpleGrid, Text, WrapItem } from '@chakra-ui/react';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsApiSlice';

export const AddContacts = () => {
  const { data, isFetching, isLoading } = useGetContactsQuery();

  const lastNumbers = () => {
    if (!data) return;
    const lastNumbers = [];
    data.map(contact => lastNumbers.push(contact));
    return lastNumbers.reverse().slice(0, 3);
  };

  return (
    <>
      {/* <Heading size="md" my="20px">
        at this place will be page add contacts...
      </Heading> */}
      <SimpleGrid my="30px" columns={2} spacingX="40px" spacingY="20px">
        <ContactsForm />
        <WrapItem
          display="flex"
          gap="20px"
          flexDirection="column"
          maxW="400px"
          width="100%"
        >
          {(isLoading || isFetching) && <Text>loading...</Text>}
          {data &&
            !isLoading &&
            lastNumbers().map(contact => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
        </WrapItem>
      </SimpleGrid>
    </>
  );
};
