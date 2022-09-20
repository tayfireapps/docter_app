// routes
import Router from './routes';
// theme
import ThemeProvider from './components/theme';
// components
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
