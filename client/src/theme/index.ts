// import { Typography } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
// import typo from './typography';
import typography from "./typography"
import overrides from './overrides';

// import createPalette from 'material-ui/styles/palette';
// let aa=createMuiTheme(palette);

const theme = createMuiTheme({
  palette,
  typography  ,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
