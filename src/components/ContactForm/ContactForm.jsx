import { PhoneIcon } from '@chakra-ui/icons';
import { MdAccountCircle } from 'react-icons/md';
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import {
  useGetContactsQuery,
  usePostContactMutation,
} from 'redux/contacts/contactsApiSlice';

export const ContactsForm = () => {
  const toast = useToast();
  const [postContact] = usePostContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (data.find(cont => cont.name.toLowerCase() === name.toLowerCase())) {
      return toast({
        description: `${name} is already in contacts`,
        isClosable: true,
        status: 'success',
      });
    }
    postContact({ name, number });
    toast({
      description: `${name} has been added to the contacts list`,
      isClosable: true,
      status: 'success',
    });
    form.reset();
  };

  return (
    <>
      <Box maxW="450px" w="100%" mx="auto">
        <form onSubmit={handleSubmitForm}>
          <FormControl
            display="flex"
            flexDirection="column"
            gap="20px"
            isRequired
          >
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon color="purple.600" boxSize="6" as={MdAccountCircle} />
                }
              />
              <Input
                name="name"
                placeholder="Name"
                _placeholder={{ opacity: 0.6, color: 'purple.800' }}
                focusBorderColor="purple.600"
                type="text"
              />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="purple.600" />}
              />
              <Input
                type="tel"
                name="number"
                _placeholder={{ opacity: 0.6, color: 'purple.800' }}
                focusBorderColor="purple.600"
                placeholder="Phone number"
              />
            </InputGroup>
            <Button colorScheme="purple" size="md" mt="20px" type="submit">
              Add
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
