import {
  Box,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import authSelectors from 'redux/auth/authSelectors';
import { Logo } from 'pages/Layout/styled';
import { NavBar, UserMenu, MobileMenu, ToggleColorMode } from 'components';

export const AppBar = () => {
  const navigate = useNavigate();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const backgroundBtn = useColorModeValue('whiteBG', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Box
        as="header"
        maxWidth="1200px"
        width="100%"
        height="80px"
        display="flex"
        justifyContent="space-between"
        mx="auto"
        py="20px"
        px="15px"
      >
        <Logo as={Link} to="/">
          PhoneBook
        </Logo>

        {isLoggedIn && (
          <>
            {isDesktop ? (
              <>
                <NavBar />
                <UserMenu />
              </>
            ) : (
              <Box
                display="flex"
                gap="10px"
                justifyContent="center"
                alignItems="center"
              >
                <ToggleColorMode />
                <MobileMenu />
              </Box>
            )}
          </>
        )}

        {!isLoggedIn && (
          <>
            {isDesktop ? (
              <Box
                display="flex"
                gap="10px"
                justifyContent="center"
                alignItems="center"
              >
                <ToggleColorMode />
                <Button
                  onClick={handleClickLogin}
                  aria-label="Sign in"
                  size="md"
                  bg={backgroundBtn}
                  _active
                  _hover={{
                    background: hoverBtn,
                  }}
                >
                  Sign in
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                gap="10px"
                justifyContent="center"
                alignItems="center"
              >
                <ToggleColorMode />
                <MobileMenu />
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  );
};
