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
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import {
  useGetContactsQuery,
  usePostContactMutation,
} from '../../redux/contacts/contactsApiSlice';
import { ButtonFrame } from '../Animations/ButtonFrame';

export const ContactForm = () => {
  const toast = useToast();
  const [postContact] = usePostContactMutation();
  const { data } = useGetContactsQuery();

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const backgroundBtnSave = useColorModeValue('purple.600', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (data.find(cont => cont.name.toLowerCase() === name.toLowerCase())) {
      return toast({
        description: `${name} is already in contacts`,
        isClosable: true,
        status: 'error',
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
                  <Icon
                    color={backgroundBtn}
                    boxSize="6"
                    as={MdAccountCircle}
                  />
                }
              />
              <Input
                name="name"
                placeholder="Name"
                _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                focusBorderColor={backgroundBtn}
                type="text"
              />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color={backgroundBtn} />}
              />
              <Input
                type="tel"
                name="number"
                _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                focusBorderColor={backgroundBtn}
                placeholder="Phone number"
              />
            </InputGroup>
            <ButtonFrame>
              <Button
                width="100%"
                color="mainWhite"
                bg={backgroundBtnSave}
                _active={{ background: backgroundBtnSave }}
                _hover={{ background: hoverBtn }}
                size="md"
                mt="20px"
                type="submit"
              >
                Add
              </Button>
            </ButtonFrame>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
