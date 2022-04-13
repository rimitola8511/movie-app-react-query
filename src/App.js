import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import Head from './components/Head';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Head name="Xepelin Movies App" />
          <Home />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
