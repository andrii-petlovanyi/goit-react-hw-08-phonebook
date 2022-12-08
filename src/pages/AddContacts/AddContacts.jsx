import {
  Box,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  WrapItem,
} from '@chakra-ui/react';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { SkeletonPost } from 'components/Loaders/SkeletonPost';
import { useGetContactsQuery } from 'redux/contacts/contactsApiSlice';
import addContactsContent from '../../images/content/addContactsContent.png';

export const AddContacts = () => {
  const { data, isLoading } = useGetContactsQuery();

  const lastNumbers = () => {
    if (!data) return;
    const lastNumbers = [];
    data.map(contact => lastNumbers.push(contact));
    return lastNumbers.reverse().slice(0, 4);
  };

  return (
    <>
      {/* <Heading size="md" my="20px">
        at this place will be page add contacts...
      </Heading> */}
      <Divider orientation="horizontal" mt="20px" mx="auto" maxW="80%" />
      <SimpleGrid my="30px" columns={2} spacingX="40px" spacingY="20px">
        <Box textAlign="center">
          <Heading as="h1" size="md" mb="30px">
            Add new contacts
          </Heading>
          <ContactsForm />
          <Image
            ml="auto"
            boxSize="200px"
            objectFit="cover"
            src={addContactsContent}
            alt="Grogu help you add contacts"
          />
        </Box>
        <WrapItem
          display="flex"
          gap="20px"
          flexDirection="column"
          maxW="400px"
          width="100%"
        >
          <Heading as="h1" size="md" mb="30px">
            {data ? 'Last added contacts' : 'No added contacts'}
          </Heading>

          {isLoading && (
            <Box w="100%" display="flex" flexDirection="column" gap="20px">
              <SkeletonPost />
              <SkeletonPost />
              <SkeletonPost />
            </Box>
          )}
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
