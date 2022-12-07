import {
  Box,
  Card,
  Heading,
  CardBody,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';

export const ContactListItem = ({ contact = [] }) => {
  return (
    <>
      <Card borderRadius="10px">
        <CardBody>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box
                bg="purple.600"
                width="50px"
                height="50px"
                borderRadius="50%"
                color="#fff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="22px"
              >
                A
              </Box>
              <Box>
                <Heading size="sm">Andrii Petlovanyi</Heading>
                <Text>+380930005250</Text>
              </Box>
            </Flex>
            <IconButton
              variant="outline"
              colorScheme="purple"
              aria-label="See menu"
              size="md"
              fontSize="20px"
              icon={<MdDeleteOutline />}
            />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
