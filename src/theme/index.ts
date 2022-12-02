import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  bg: {
    onboarding: 'black',
  },
  text: {
    placeholder: '#D0D2D5',
    main: {
      50: '#BBC1C6',
      100: '#999FA7',
      200: '#5C6672',
      900: '#33404F',
    },
    danger: '#FF7070',
  },
};
const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      fontSize: '16px',
    },
    body: {
      fontSize: '16px',
      fontFamily: 'Inter, sans-serif',
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
