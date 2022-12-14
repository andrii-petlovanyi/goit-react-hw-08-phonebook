import {
  Box,
  Card,
  Heading,
  CardBody,
  Text,
  Flex,
  IconButton,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApiSlice';
import { ButtonFrame, CardFrame, EditForm } from '../index';

export const ContactListItem = ({ contact = [] }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const toast = useToast();
  const { id, name, number } = contact;

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');
  const backgroundAvatar = useColorModeValue('purple.600', 'darkBG');
  const lightBackground = useColorModeValue(
    'lightBtnBGWhite',
    'lightBtnBGDark'
  );

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
      <CardFrame>
        <Card borderRadius="10px" width="100%">
          <CardBody>
            <Flex spacing="4">
              <Flex flex="1" gap="5" alignItems="center" flexWrap="wrap">
                <Box
                  width="55px"
                  height="55px"
                  borderRadius="50%"
                  color="mainWhite"
                  bg={backgroundAvatar}
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
                <ButtonFrame>
                  <IconButton
                    onClick={handleDeleteContact}
                    variant="outline"
                    isLoading={isLoading ? true : false}
                    color={backgroundBtn}
                    bg="none"
                    borderColor={backgroundBtn}
                    _active={{
                      color: backgroundBtn,
                      borderColor: backgroundBtn,
                    }}
                    _hover={{
                      color: hoverBtn,
                      background: lightBackground,
                      borderColor: hoverBtn,
                    }}
                    aria-label="Delete contact"
                    size="md"
                    fontSize="20px"
                    icon={<MdDeleteOutline />}
                  />
                </ButtonFrame>
                <EditForm contact={contact} />
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </CardFrame>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
