import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
import { useSignUpUserMutation } from 'redux/auth/authApiSlice';
import { register } from 'redux/auth/authSlice';

export const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signUpUser] = useSignUpUserMutation();
  const [value, setValue] = useState({
    name: '',
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

  const handleSubmitForm = async e => {
    // e.preventDefault();
    if (value.name === '' || value.email === '' || value.password === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
      });

    try {
      const checkedUser = await signUpUser(value, {
        selectFromResult: ({ data }) => data.user,
      });
      dispatch(register(checkedUser));
      setValue({ name: '', email: '', password: '' });
      onClose();
      navigate('/');
    } catch (error) {
      toast({
        description:
          'Something went wrong...Maybe, this user already exists...',
        isClosable: true,
        status: 'error',
      });
    }
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
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                id="register_name"
                value={value.nickname}
                onChange={handleInputChange}
              />
              <FormLabel pt="20px">Email</FormLabel>
              <Input
                name="email"
                type="email"
                id="register_email"
                value={value.email}
                onChange={handleInputChange}
              />
              <FormLabel pt="20px">Password</FormLabel>
              <Input
                name="password"
                type="password"
                id="register_password"
                value={value.password}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-around">
            <Button
              type="submit"
              onClick={handleSubmitForm}
              aria-label="Sign up"
              colorScheme="purple"
              size="md"
            >
              Sign up
            </Button>
            <Button
              onClick={handleClickLogin}
              aria-label="Sign in"
              colorScheme="purple"
              size="md"
            >
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
