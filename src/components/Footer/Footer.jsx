import { Box, Divider, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        maxWidth="1200px"
        width="100%"
        mx="auto"
        px="15px"
        height="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Divider />
        <Text>© 2022 | Petlovanyi A.</Text>
      </Box>
    </>
  );
};
