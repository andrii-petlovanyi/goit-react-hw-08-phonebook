import { Box, Center, Divider, Skeleton } from '@chakra-ui/react';

export const SkeletonAppBar = () => {
  return (
    <>
      <Box
        maxWidth="1200px"
        width="100%"
        display="flex"
        justifyContent="space-between"
        mx="auto"
        px="10px"
        py="15px"
        height="70px"
      >
        <Skeleton width="140px" height="100%" borderRadius="20px" />
        <Box display="flex" gap="10px">
          <Skeleton width="110px" height="100%" borderRadius="30px" />
          <Center height="auto">
            <Divider mx="15px" orientation="vertical" size="lg" />
          </Center>
          <Skeleton width="85px" height="100%" borderRadius="10px" />
        </Box>
      </Box>
    </>
  );
};
