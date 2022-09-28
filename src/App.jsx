import { createTheme, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import MainPage from './MainPage';
import store from './store';

const theme = createTheme({
  palette: {
    info: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
    },
  },
  typography: {
    fontFamily: 'Julee',
  },
});

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </ReduxProvider>
  );
}
