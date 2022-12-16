import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';
import { MdExitToApp } from 'react-icons/md';

import { useLogOutUserMutation } from 'redux/auth/authApiSlice';
import { logOut } from 'redux/auth/authSlice';
import authSelectors from 'redux/auth/authSelectors';
import { ButtonFrame, Section, ToggleColorMode } from 'components';
import userAvatar from 'images/avatar/userAvatar.jpg';
import { MobileLinkStyled } from 'pages/Layout/styled';

export const MobileMenu = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Add contacts', link: '/add' },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userToken = useSelector(authSelectors.getUserToken);
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const firstTarget = useRef();

  const backgroundMenuColor = useColorModeValue('mainWhite', 'mainDark');
  const backgroundUserMenu = useColorModeValue('purple.100', 'teal.900');
  const textColor = useColorModeValue('#2e2e2e', 'mainWhite');
  const headerColor = useColorModeValue('#2e2e2e', 'teal.600');
  const hoverColor = useColorModeValue('hoverWhite', 'hoverBlack');
  const backgroundBtn = useColorModeValue('whiteBG', 'darkBG');

  const handleClickLogout = async () => {
    const checkedUser = await logOutUser(userToken);
    onClose();
    dispatch(logOut(checkedUser));
    toast({
      description: `Goodbye, ${userName}`,
      isClosable: true,
      status: 'success',
      duration: 2000,
    });
  };

  const handleOpenMenu = () => {
    onOpen();
  };

  const handleClickLink = () => {
    setTimeout(onClose, 200);
  };

  const handleClickLogin = () => {
    onClose();
    navigate('/login');
  };

  const handleClickRegister = () => {
    onClose();
    navigate('/register');
  };

  return (
    <>
      <ButtonFrame>
        <IconButton
          size="md"
          onClick={handleOpenMenu}
          variant="ghost"
          color="white"
          bg={useColorModeValue('whiteBG', 'darkBG')}
          _active
          _hover={{ background: hoverColor }}
          icon={<FiMenu fontSize="1.25rem" />}
          aria-label="Open Menu"
        />
      </ButtonFrame>
      <Drawer
        onClose={onClose}
        initialFocusRef={firstTarget}
        isOpen={isOpen}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg={backgroundMenuColor}>
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            px="15px"
            py="20px"
          >
            <Heading size="lg" color={headerColor}>
              PhoneBook
            </Heading>
            <Box display="flex" gap="10px">
              <ToggleColorMode />
              <ButtonFrame>
                <IconButton
                  onClick={onClose}
                  ref={firstTarget}
                  variant="ghost"
                  color="white"
                  bg={useColorModeValue('whiteBG', 'darkBG')}
                  _active
                  _hover={{
                    background: hoverColor,
                  }}
                  icon={<CloseIcon fontSize="0.9rem" />}
                  aria-label="Close Menu"
                />
              </ButtonFrame>
            </Box>
          </DrawerHeader>
          <DrawerBody display="flex">
            {isLoggedIn && (
              <Box
                as="nav"
                my="auto"
                ml="auto"
                mr="20%"
                display="flex"
                gap="25px"
                flexDirection="column"
                alignItems="flex-end"
              >
                {links.map(({ name, link }) => (
                  <MobileLinkStyled
                    onClick={handleClickLink}
                    key={name}
                    as={NavLink}
                    to={link}
                  >
                    {name}
                  </MobileLinkStyled>
                ))}
              </Box>
            )}
          </DrawerBody>
          <Section delay={0.4} mx="auto">
            <DrawerFooter mb="50px">
              {isLoggedIn ? (
                <Box
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p="20px"
                  maxW="300px"
                  width="100%"
                  mx="auto"
                  gap="10px"
                  size="lg"
                  backgroundColor={backgroundUserMenu}
                  borderRadius="20px"
                >
                  <IconButton
                    position="absolute"
                    top="0"
                    right="0"
                    onClick={handleClickLogout}
                    color="white"
                    bg="red.600"
                    size="md"
                    _active
                    _hover={{
                      background: 'red.700',
                    }}
                    icon={<MdExitToApp fontSize="1.5rem" />}
                    aria-label="Logout"
                  />
                  <Avatar mt="-55px" size="lg" src={userAvatar}></Avatar>
                  <Text color={textColor} fontWeight="600">
                    {userName}
                  </Text>
                  <Text color={textColor} fontWeight="600">
                    {userEmail}
                  </Text>
                </Box>
              ) : (
                <Box mx="auto" display="flex" flexDirection="column" gap="20px">
                  <Text fontSize="20px">Please, sign in...</Text>
                  <ButtonFrame>
                    <Button
                      width="100%"
                      onClick={handleClickLogin}
                      aria-label="Login"
                      bg={backgroundBtn}
                      _active
                      _hover={{
                        background: hoverColor,
                      }}
                      size="lg"
                    >
                      Sign In
                    </Button>
                  </ButtonFrame>
                  <Text fontSize="18px" fontWeight="700" mx="auto">
                    or
                  </Text>
                  <ButtonFrame>
                    <Button
                      width="100%"
                      onClick={handleClickRegister}
                      aria-label="Login"
                      bg={backgroundBtn}
                      _active
                      _hover={{
                        background: hoverColor,
                      }}
                      size="lg"
                    >
                      Sign up
                    </Button>
                  </ButtonFrame>
                </Box>
              )}
            </DrawerFooter>
          </Section>
        </DrawerContent>
      </Drawer>
    </>
  );
};
