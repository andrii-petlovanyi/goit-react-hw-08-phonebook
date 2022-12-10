import { Box, Divider, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import {
  ContactForm,
  ContactListItem,
  SkeletonPost,
  Section,
} from '../../components/index';

import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';
import addContactsContent from '../../images/content/addContactsContent.png';

const AddContacts = () => {
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
          <Section delay={0.1}>
            <Heading as="h1" size="md" mb="35px">
              Add new contacts
            </Heading>
          </Section>
          <Section delay={0.2}>
            <ContactForm />
          </Section>
          <Section delay={0.3}>
            <Image
              ml="auto"
              boxSize="200px"
              objectFit="cover"
              src={addContactsContent}
              alt="Grogu help you add contacts"
            />
          </Section>
        </Box>
        <Box
          display="flex"
          gap="10px"
          flexDirection="column"
          maxW="400px"
          width="100%"
        >
          <Section delay={0.4}>
            <Heading as="h1" size="md">
              {data ? 'Last added contacts' : 'No added contacts'}
            </Heading>
          </Section>
          <Section delay={0.5}>
            <Box
              display="flex"
              gap="20px"
              flexDirection="column"
              maxW="400px"
              width="100%"
            >
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
            </Box>
          </Section>
        </Box>
      </SimpleGrid>
    </>
  );
};
export default AddContacts;
