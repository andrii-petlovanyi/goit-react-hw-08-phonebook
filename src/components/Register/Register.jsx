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
  FormControl,
  FormLabel,
  Input,
  useToast,
  WrapItem,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { useSignUpUserMutation } from 'redux/auth/authApiSlice';
import { register } from 'redux/auth/authSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
    e.preventDefault();
    if (value.name === '' || value.email === '' || value.password === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
      });

    try {
      const checkedUser = await signUpUser(value);
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
            <form onSubmit={handleSubmitForm}>
              <FormControl py="20px" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="register_name"
                  value={value.nickname}
                  onChange={handleInputChange}
                />
                <FormLabel pt="20px">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  id="register_email"
                  value={value.email}
                  onChange={handleInputChange}
                />
                <FormLabel pt="20px">Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    id="register_password"
                    value={value.password}
                    onChange={handleInputChange}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.5rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? (
                        <Icon as={ViewIcon} />
                      ) : (
                        <Icon as={ViewOffIcon} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <WrapItem
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                paddingTop="40px"
              >
                <Button
                  maxW="120px"
                  width="100%"
                  type="submit"
                  aria-label="Sign up"
                  colorScheme="purple"
                  size="md"
                >
                  Sign up
                </Button>
                <Text color="purple.800" fontWeight="700" fontSize="lg">
                  or
                </Text>
                <Button
                  maxW="120px"
                  width="100%"
                  onClick={handleClickLogin}
                  aria-label="Sign in"
                  colorScheme="purple"
                  size="md"
                >
                  Sign in
                </Button>
              </WrapItem>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
