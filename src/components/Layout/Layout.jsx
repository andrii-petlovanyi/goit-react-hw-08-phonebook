import { Link, NavLink, Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { LinkStyled, Logo } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Box bg="#dAdDdF" height="100vh">
        <Box
          as="header"
          width="1200px"
          display="flex"
          justifyContent="space-between"
          mx="auto"
          padding="10px"
        >
          <Logo as={Link} to="/">
            PhoneBook
          </Logo>
          <Box as="nav" display="flex" gap="10px">
            <LinkStyled as={NavLink} to="/contacts">
              Contacts
            </LinkStyled>
            <LinkStyled as={NavLink} to="/add">
              Add contacts
            </LinkStyled>
          </Box>
          <Box>...there must be auth</Box>
        </Box>
        <Box as="main" width="1200px" mx="auto">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
