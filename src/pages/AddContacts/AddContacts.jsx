import {
  Box,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  ContactForm,
  ContactListItem,
  SkeletonPost,
  Section,
} from '../../components/index';

import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';
import addContactsContent from '../../images/content/addContactsContent.webp';

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
      <Divider orientation="horizontal" mt="20px" mx="auto" maxW="80%" />
      <SimpleGrid my="30px" columns={[1, 1, 2]} spacingX="40px" spacingY="20px">
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
              display={['none', 'none', 'flex']}
              ml="auto"
              boxSize="200px"
              objectFit="cover"
              src={addContactsContent}
              alt="Grogu help you add contacts"
            />
          </Section>
          <Box
            display={['flex', 'flex', 'none']}
            mt="50px"
            mb="30px"
            mx="auto"
            maxW="400px"
            borderBottom={`2px solid ${useColorModeValue(
              '#2e2e2e',
              '#285E61'
            )}`}
          ></Box>
        </Box>

        <Box
          display="flex"
          gap="10px"
          flexDirection="column"
          mx={['auto', 'auto', 0]}
          maxW="450px"
          width="100%"
        >
          <Section delay={0.4}>
            <Heading as="h1" size="md" textAlign="center">
              {data?.length > 0 ? 'Last added contacts' : 'No added contacts'}
            </Heading>
          </Section>
          <Section delay={0.5}>
            <Box
              display="flex"
              gap="20px"
              flexDirection="column"
              maxW="450px"
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
