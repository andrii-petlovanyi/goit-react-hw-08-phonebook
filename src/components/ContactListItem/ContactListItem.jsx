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
import { useDeleteContactMutation } from '../../redux/contacts/contactsApiSlice';
import { EditForm } from '../index';

export const ContactListItem = ({ contact = [] }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const toast = useToast();
  const { id, name, number } = contact;

  const handleDeleteContact = () => {
    deleteContact(id);
    return toast({
      description: `${name} has been deleted!`,
      isClosable: true,
      status: 'success',
    });
  };

  return (
    <>
      <Card borderRadius="10px" width="100%">
        <CardBody>
          <Flex spacing="4">
            <Flex flex="1" gap="5" alignItems="center" flexWrap="wrap">
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
                {name.charAt(0)}
              </Box>
              <Box display="flex" gap="10px" flexDirection="column">
                <Heading size="sm">{name}</Heading>
                <Text>{number}</Text>
              </Box>
            </Flex>
            <Box display="flex" gap="10px" flexDirection="column">
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
              <EditForm contact={contact} />
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
