import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';

export const MobileMenu = () => {
  return (
    <>
      <IconButton
        variant="ghost"
        color="white"
        bg={useColorModeValue('whiteBG', 'darkBG')}
        _active
        _hover={{ background: useColorModeValue('hoverWhite', 'hoverBlack') }}
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
      />
    </>
  );
};
