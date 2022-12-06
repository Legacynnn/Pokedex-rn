import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    background: {
      100: '#FFFFFF',
      300: '#F2F2F2',
      500: '#E2E2E2',
      900: '#17171B'
    },
    bgType: {
      water: '#58ABF6'
    },
    type:{
      water: '#4A90DA',
      waterOpacity: 'rgba(74, 144, 218, 0.7)'
    }
  }
})

type CustomThemeType = typeof THEME;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}