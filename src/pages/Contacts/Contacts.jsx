import { Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';

import {
  Section,
  SkeletonPost,
  Filter,
  ContactList,
} from '../../components/index';
import noDataContent from '../../images/content/noDataContent.png';

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
        {!data?.length && !isLoading && (
          <Box
            display="flex"
            maxW={['200px', '300px', '450px']}
            gap={['20px', '30px', '30px']}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mt={['70px', '80px', '90px']}
            mx="auto"
          >
            <Image
              src={noDataContent}
              maxW={['200px', '250px', '350px']}
              alt="Grogu not found any contacts in base"
            ></Image>
            <Text
              mx="auto"
              fontSize={['17px', '17px', '19px']}
              fontWeight="700"
            >
              Sorry, but contacts list is empty... Please add contacts...
            </Text>
          </Box>
        )}
        {data?.length > 0 && !isLoading && <ContactList />}
      </Section>
    </>
  );
};

export default Contacts;
