import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box as="main" maxWidth="1200px" width="100%" mx="auto" px="15px">
        <Outlet />
      </Box>
    </>
  );
};
