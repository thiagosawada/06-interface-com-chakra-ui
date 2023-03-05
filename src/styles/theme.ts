import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "300": "#DADADA"
    },
    yellow: {
      "highlight": "#FFBA08"
    },
    white: {
      "headings": "#F5F8FA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700'
      }
    }
  }
});