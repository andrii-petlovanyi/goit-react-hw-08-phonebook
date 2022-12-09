import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box
        as="main"
        maxWidth="1200px"
        height="80vh"
        width="100%"
        mx="auto"
        px="15px"
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
