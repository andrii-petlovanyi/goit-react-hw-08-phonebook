import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMode = colorMode === 'light';
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('Light', 'Dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          fontSize="20px"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          color={useColorModeValue('white', 'white')}
          bg={useColorModeValue('whiteBG', 'darkBG')}
          _active
          _hover={{ background: useColorModeValue('hoverWhite', 'hoverBlack') }}
        >
          {isMode ? 'Dark' : 'Light'}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};
