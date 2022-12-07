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

export const Login = () => {
  const location = useLocation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setValue(state => ({ ...state, [name]: value }));
  };

  useEffect(() => {
    onOpen();
    return () => onClose();
    // eslint-disable-next-line
  }, [location]);

  const handleSubmitForm = e => {
    // e.preventDefault();
    if (value.email === '' || value.password === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
        colorScheme: 'purple',
      });
    setValue({ email: '', password: '' });
    console.log('hello');
    navigate('/');
    onClose();
  };

  const handleClickSignUp = () => {
    navigate('/register');
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
          <ModalHeader>Please login</ModalHeader>
          <ModalBody pb="30px">
            <FormControl py="20px">
              <FormLabel>Email</FormLabel>
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
              Login
            </Button>
            <Button onClick={handleClickSignUp} colorScheme="purple" size="md">
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
