import { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import '@fontsource/montserrat';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat'].join(),
  },
});

const BaseComponent: React.FC<any> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default BaseComponent;
