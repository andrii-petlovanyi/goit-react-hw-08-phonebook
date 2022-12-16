import { Box, Divider, Text } from '@chakra-ui/react';

import { Section } from 'components';

export const Footer = () => {
  return (
    <>
      <Section delay={0.4}>
        <Box
          as="footer"
          maxWidth="1200px"
          width="100%"
          mx="auto"
          px="15px"
          height="60px"
          display="flex"
          gap="20px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Divider maxW="80%" />
          <Text>© 2022 | Petlovanyi A.</Text>
        </Box>
      </Section>
    </>
  );
};
