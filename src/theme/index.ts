import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  bg: {
    onboarding: 'black',
    icon: {
      ghost: {
        default: '#F5F5F5',
        hover: '#E5E5E5',
      },
    },
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
      fontSize: '18px',
    },
    body: {
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#DBDBDB',
    },
    '#root': {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
