import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AppBar, Footer } from '../../components/index';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Box
        as="main"
        maxWidth="1200px"
        minHeight="75vh"
        width="100%"
        mx="auto"
        px="15px"
      >
        <Suspense fallback={false}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
