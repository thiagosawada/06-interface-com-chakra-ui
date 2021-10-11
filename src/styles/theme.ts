import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "text": "#47585B",
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
        color: 'gray.text'
      }
    }
  }
});