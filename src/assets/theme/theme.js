import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', 
    useSystemColorMode: true,
  },
  components: {},
});

export default theme;
