import {
  Box,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from '@chakra-ui/react';

export const SkeletonPost = () => {
  return (
    <>
      <Box
        padding="4"
        boxShadow="lg"
        borderRadius="10px"
        bg={useColorModeValue('white', '#2D3748')}
      >
        <SkeletonCircle size="6" />
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
      </Box>
    </>
  );
};
