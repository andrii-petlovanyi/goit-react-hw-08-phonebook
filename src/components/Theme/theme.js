import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  mainWhite: '#f9f9f9',
  mainDark: '#202023',
  darkBG: '#234E52',
  whiteBG: '#6B46C1',
  hoverWhite: '#9F7AEA',
  hoverBlack: '#2C7A7B',
  btnOutlineBG: '#319795',
  lightBtnBGWhite: '#FAF5FF',
  lightBtnBGDark: '#2D3748',
};

const styles = {
  global: props => ({
    body: {
      bg: mode('mainWhite', 'mainDark')(props),
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('accentWhite', 'teal.600')(props),
      textUnderlineOffset: 3,
      _hover: {
        color: mode('accentWhiteHover', 'teal.300')(props),
      },
    }),
  },

  IconButton: {
    baseStyle: props => ({
      color: mode('white', 'white')(props),
      bg: mode('whiteBG', 'darkBG')(props),
      _hover: {
        bg: mode('hoverWhite', 'hoverBlack')(props),
      },
    }),
  },
  Button: {
    baseStyle: props => ({
      color: mode('white', 'white')(props),
      bg: mode('whiteBG', 'darkBG')(props),
      _hover: {
        bg: mode('hoverWhite', 'hoverBlack')(props),
      },
    }),
  },
  Divider: {
    baseStyle: props => ({
      opacity: 0.9,
      bg: mode('whiteBG', 'darkBG')(props),
      fontWeight: '700',
      width: '1px',
    }),
  },
};

const theme = extendTheme({ config, components, colors, styles });

export default theme;
