import { ThemeProvider } from "styled-components";
import {GlobalStyles} from '../src/styles/global-styles';
import {theme} from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { 
    default:'light',
    value:[
      {
        name:'light',
        value: 'theme.colors.white',
      },
      {
        name:'dark',
        value: 'theme.colors.primaryColor',
      },
    ]
  }
}

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
    <Story/>
    <GlobalStyles/>
    </ThemeProvider>
  )
];