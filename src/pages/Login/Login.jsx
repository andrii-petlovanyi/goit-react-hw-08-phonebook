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
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  Divider,
  Box,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { logIn } from '../../redux/auth/authSlice';
import {
  useGetUserQuery,
  useLogInUserMutation,
} from '../../redux/auth/authApiSlice';
import { ButtonFrame } from '../../components';

const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [logInUser, { isLoading }] = useLogInUserMutation();
  const { isLoading: isRefresh } = useGetUserQuery();
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const backgroundBtnSave = useColorModeValue('purple.600', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

  console.log(useGetUserQuery());
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
    e.preventDefault();
    if (value.email === '' || value.password === '')
      return toast({
        description: 'Please, fill all fields form...',
        isClosable: true,
        status: 'error',
      });

    try {
      const checkedUser = await logInUser(value);

      dispatch(logIn(checkedUser));
      setValue({ email: '', password: '' });
      navigate('/contacts');
      onClose();
      toast({
        description: `Welcome, ${checkedUser.data.user.name} !`,
        isClosable: true,
        status: 'success',
        duration: 3000,
      });
    } catch (error) {
      toast({
        description:
          'Wrong username or e-mail. If you`re not signed up yet, you`re welcome to do it!',
        isClosable: true,
        status: 'error',
      });
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClickSignUp = () => {
    navigate('/register');
  };

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    !isRefresh && (
      <>
        <Modal isOpen={isOpen} onClose={handleClose} isCentered>
          <ModalOverlay />
          <ModalContent py="20px">
            <ModalHeader fontSize="30px">Welcome back</ModalHeader>
            <ModalBody pb="20px">
              <form onSubmit={handleSubmitForm}>
                <FormControl py="20px" isRequired>
                  <Divider width="70%" mx="auto" />
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                    focusBorderColor={backgroundBtn}
                    id="login_email"
                    value={value.email}
                    onChange={handleInputChange}
                  />
                  <FormLabel pt="20px">Password</FormLabel>
                  <InputGroup>
                    <Input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                      focusBorderColor={backgroundBtn}
                      placeholder="********"
                      id="login_password"
                      value={value.password}
                      onChange={handleInputChange}
                    />
                    <InputRightElement width="3rem">
                      <Button
                        h="1.7rem"
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
                <Box
                  display="flex"
                  mx="auto"
                  flexDirection="column"
                  paddingTop="40px"
                >
                  <ButtonFrame>
                    <Button
                      isLoading={isLoading ? true : false}
                      width="100%"
                      type="submit"
                      aria-label="Login user"
                      bg={backgroundBtnSave}
                      _active={{ background: backgroundBtnSave }}
                      _hover={{ background: hoverBtn }}
                      size="md"
                    >
                      Sign in
                    </Button>
                  </ButtonFrame>

                  <Text display="flex" mx="auto" pt="20px" fontSize="md">
                    Not registered?
                    <Link
                      pl="5px"
                      // color={useColorModeValue('purple.600', 'teal.400')}
                      fontSize="md"
                      onClick={handleClickSignUp}
                    >
                      Create an account
                    </Link>
                  </Text>
                </Box>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  );
};

export default Login;
