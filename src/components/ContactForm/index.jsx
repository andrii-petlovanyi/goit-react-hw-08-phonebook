import { PhoneIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
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
} from 'redux/contacts/contactsApiSlice';
import { ButtonFrame } from 'components';
import { useFocus } from 'hooks/useFocus';
import { useState } from 'react';

export const ContactForm = () => {
  const toast = useToast();
  const [inputRef, setInputFocus] = useFocus();
  const [phone, setPhone] = useState(null);
  const [postContact, { isLoading }] = usePostContactMutation();
  const { data } = useGetContactsQuery();

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const backgroundBtnSave = useColorModeValue('purple.600', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

  const handleChangePhone = e => {
    const result = e.target.value.replace(/[a-zA-Zа-яА-Я\'\і\І\-\=\"\_]/g, '');
    setPhone(result);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value.trim();
    const number = e.target.elements.number.value.trim();
    if (data.find(cont => cont.name.toLowerCase() === name.toLowerCase())) {
      form.reset();
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
    setPhone('');
    setInputFocus();
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
                // eslint-disable-next-line react/no-children-prop
                children={
                  <Icon
                    color={backgroundBtn}
                    boxSize="6"
                    as={MdAccountCircle}
                  />
                }
              />
              <Input
                type="text"
                ref={inputRef}
                name="name"
                placeholder="Name"
                _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                focusBorderColor={backgroundBtn}
              />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<PhoneIcon color={backgroundBtn} />}
              />
              <Input
                value={phone ? phone : ''}
                onChange={handleChangePhone}
                type="tel"
                name="number"
                _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                focusBorderColor={backgroundBtn}
                placeholder="Phone number"
              />
            </InputGroup>
            <ButtonFrame>
              <Button
                isLoading={isLoading ? true : false}
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
