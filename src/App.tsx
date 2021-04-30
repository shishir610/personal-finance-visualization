import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import Dashboard from './Dashboard/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5C93D6',
      dark: '#2D9CDB'
    },
    secondary: {
      light: '#f0f0f0',
      main: '#474747',
    }
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
