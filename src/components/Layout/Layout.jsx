import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

import { LinkStyled, Logo } from './Layout.styled';

export const Layout = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <Box bg="#dAdDdF" height="100vh">
        <Box
          as="header"
          maxWidth="1200px"
          width="100%"
          display="flex"
          justifyContent="space-between"
          mx="auto"
          padding="10px"
        >
          <Logo as={Link} to="/">
            PhoneBook
          </Logo>
          <Box as="nav" display="flex" gap="15px" alignItems="center">
            <LinkStyled as={NavLink} to="/contacts">
              Contacts
            </LinkStyled>
            <LinkStyled as={NavLink} to="/add">
              Add contacts
            </LinkStyled>
          </Box>
          <Button onClick={handleClickLogin} colorScheme="purple" size="md">
            Login
          </Button>
        </Box>
        <Box as="main" maxWidth="1200px" width="100%" mx="auto" px="15px">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
