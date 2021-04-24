import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5c93d6',
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
