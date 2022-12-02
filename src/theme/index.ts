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
