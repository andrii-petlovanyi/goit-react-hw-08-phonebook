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
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSignUpUserMutation } from '../../redux/auth/authApiSlice';
import { register } from '../../redux/auth/authSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import registerPageContent from '../../images/content/registerPageContent.png';

const Register = () => {
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

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const backgroundBtnSave = useColorModeValue('purple.600', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

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
          <ModalHeader fontSize="30px">Create an account</ModalHeader>
          <ModalBody pb="20px">
            {/* <Image src={registerPageContent} width="100px" mx="auto" /> */}

            <form onSubmit={handleSubmitForm}>
              <FormControl py="20px" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                  focusBorderColor={backgroundBtn}
                  id="register_name"
                  value={value.nickname}
                  onChange={handleInputChange}
                />
                <FormLabel pt="20px">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                  focusBorderColor={backgroundBtn}
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
                    _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                    focusBorderColor={backgroundBtn}
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
              <Box
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
                  bg={backgroundBtnSave}
                  _active={{ background: backgroundBtnSave }}
                  _hover={{ background: hoverBtn }}
                  size="md"
                >
                  Sign up
                </Button>
                <Text color={backgroundBtn} fontWeight="700" fontSize="lg">
                  or
                </Text>
                <Button
                  maxW="120px"
                  width="100%"
                  onClick={handleClickLogin}
                  aria-label="Sign in"
                  bg={backgroundBtnSave}
                  _active={{ background: backgroundBtnSave }}
                  _hover={{ background: hoverBtn }}
                  size="md"
                >
                  Sign in
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;