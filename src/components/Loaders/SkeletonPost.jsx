import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export const SkeletonPost = () => {
  return (
    <>
      <Box padding="3" boxShadow="lg" bg="white">
        <SkeletonCircle size="6" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
    </>
  );
};
