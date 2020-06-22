import React, { Fragment } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, yellow } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import Cover from '../Cover/Cover';
import AboutMe from '../AboutMe/AboutMe';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: yellow[300],
    },
  },
});

const App = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cover />
      <AboutMe />
    </ThemeProvider>
  </Fragment>
);

export default App;
