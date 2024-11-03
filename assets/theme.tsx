// theme.ts
import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';

// Extend the Palette and PaletteOptions interfaces to include custom properties
declare module '@mui/material/styles' {
  interface Palette {
    label: Palette['primary'];
    ActiveBorder: Palette['primary'];
    BorderSubtle: Palette['primary'];
    InactiveCaptionText: Palette['primary'];
  }
  interface PaletteOptions {
    label?: PaletteOptions['primary'];
    ActiveBorder?: PaletteOptions['primary'];
    BorderSubtle?: PaletteOptions['primary'];
    InactiveCaptionText?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4169E1', // blue
    },
    secondary: {
      main: '#dc004e', // crimson
    },
    text: {
      primary: '#9E9E9E', // orange
    },
    label: {
      main: '#9E9E9E', // blue
    },
    ActiveBorder: {
      main: '#9E9E9E', // medium gray
    },
    BorderSubtle: {
      main: '#E0E0E0', // light gray
    },
    InactiveCaptionText: {
      main: '#A9A9A9',
    },
  },
});

export default theme;