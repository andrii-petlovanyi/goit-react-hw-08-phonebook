import {
  Box,
  Card,
  Heading,
  CardBody,
  Text,
  Flex,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteContactMutation } from 'redux/contacts/contactsApiSlice';

export const ContactListItem = ({ contact = [] }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const toast = useToast();

  const handleDeleteContact = () => {
    deleteContact(contact.id);
    return toast({
      description: `${contact.name} has been deleted!`,
      isClosable: true,
      status: 'success',
    });
  };

  return (
    <>
      <Card borderRadius="10px" width="100%">
        <CardBody>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box
                bg="purple.600"
                width="50px"
                height="50px"
                borderRadius="50%"
                color="#fff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="22px"
              >
                A
              </Box>
              <Box>
                <Heading size="sm">{contact.name}</Heading>
                <Text>{contact.number}</Text>
              </Box>
            </Flex>
            <IconButton
              onClick={handleDeleteContact}
              variant="outline"
              isLoading={isLoading ? true : false}
              colorScheme="purple"
              aria-label="Delete contact"
              size="md"
              fontSize="20px"
              icon={<MdDeleteOutline />}
            />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
