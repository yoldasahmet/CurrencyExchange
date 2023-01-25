import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent: PaletteColor;
    warn: PaletteColor;
    defaultText: PaletteColor;
    tableHeader: PaletteColor;
    
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
    warn: PaletteColorOptions;
    defaultText: PaletteColorOptions;
    tableHeader: PaletteColorOptions;
  }
}