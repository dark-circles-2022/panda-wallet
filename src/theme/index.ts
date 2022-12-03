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
  input: {
    bg: {
      default: '#F7F7F7',
      focus: '#F2F2F2',
    },
  },
  icon: {
    bg: {
      ghost: {
        default: '#FBFBFB',
        hover: '#E5E5E5',
      },
    },
    border: {
      50: '#49536E0f',
      100: '#A3A8B6',
      200: '#49536E',
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
  },
  danger: '#FF7070',
  success: '#23ff48',
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
