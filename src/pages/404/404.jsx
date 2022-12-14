import { Box, Image, Text } from '@chakra-ui/react';

import errorPageContent from '../../images/content/errorPageContent.webp';

const NotFound = () => {
  return (
    <>
      <Box
        mx="auto"
        display="flex"
        mt="40px"
        gap="30px"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        px="15px"
      >
        <Image
          width="60%"
          src={errorPageContent}
          alt="Grogu search your not found page"
        />

        <Box
          display="flex"
          flexDirection="column"
          my="auto"
          alignItems="center"
          borderLeft="3px solid #3e3e3e"
          pt="30px"
          pl="20px"
        >
          <Text fontSize="30px" fontWeight="700">
            Ooooooops!
          </Text>
          <Text fontSize="24px">Page not found...</Text>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
