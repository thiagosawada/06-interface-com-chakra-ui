import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "text": "#47585B",
    }
  },
  styles: {
    global: {
      body: {
        color: 'gray.text'
      }
    }
  }
});