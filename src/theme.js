import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1569C8',
    },
    yellow: {
      main: yellow[100],
    },
    secondary: {
      main: '#f44336',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff',
    },
    grey: {
      main: '#D3D3D3',
    },
    background: {
      default: '#fff',
    },
    black: {
        main: '000',
    }
  },
});

export default theme;