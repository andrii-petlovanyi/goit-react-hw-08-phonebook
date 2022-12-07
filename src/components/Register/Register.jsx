import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

export const Register = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    onOpen();
    return () => onClose();
    // eslint-disable-next-line
  }, [location]);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setValue(state => ({ ...state, [name]: value }));
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleSubmitForm = e => {
    // e.preventDefault();
    if (value.email === '' || value.password === '' || value.nickname === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
        colorScheme: 'purple',
      });
    setValue({ email: '', password: '', nickname: '' });
    console.log('hello');
    onClose();
    navigate('/');
  };

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent py="20px">
          <ModalHeader>Please fill your data</ModalHeader>
          <ModalBody>
            <FormControl py="20px">
              <FormLabel>Nickname</FormLabel>
              <Input
                type="text"
                name="nickname"
                value={value.nickname}
                onChange={handleInputChange}
              />
              <FormLabel pt="20px">Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={value.email}
                onChange={handleInputChange}
              />
              <FormLabel pt="20px">Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={value.password}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-around">
            <Button
              type="submit"
              onClick={handleSubmitForm}
              colorScheme="purple"
              size="md"
            >
              Sign up
            </Button>
            <Button onClick={handleClickLogin} colorScheme="purple" size="md">
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
