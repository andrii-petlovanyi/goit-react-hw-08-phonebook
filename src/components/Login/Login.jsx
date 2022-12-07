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

import { logIn } from 'redux/auth/authSlice';
import { useLogInUserMutation } from 'redux/auth/authApiSlice';

export const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();
  const dispatch = useDispatch();
  const [logInUser] = useLogInUserMutation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const handleSubmitForm = async e => {
    if (value.email === '' || value.password === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
      });

    try {
      const checkedUser = await logInUser(value, {
        selectFromResult: ({ data }) => data.user,
      });

      dispatch(logIn(checkedUser));
      setValue({ email: '', password: '' });
      navigate('/contacts');
      onClose();
    } catch (error) {
      toast({
        description:
          'Wrong username or e-mail. If you`re not signed up yet, you`re welcome to do it!',
        isClosable: true,
        status: 'error',
      });
    }
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
                id="login_email"
                value={value.email}
                onChange={handleInputChange}
              />
              <FormLabel pt="20px">Password</FormLabel>
              <Input
                name="password"
                type="password"
                id="login_password"
                value={value.password}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-around">
            <Button
              type="submit"
              onClick={handleSubmitForm}
              aria-label="Login user"
              colorScheme="purple"
              size="md"
            >
              Sign in
            </Button>
            <Button
              onClick={handleClickSignUp}
              aria-label="Sign up"
              colorScheme="purple"
              size="md"
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
