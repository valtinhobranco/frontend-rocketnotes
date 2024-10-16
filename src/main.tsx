import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// ? GlobalStyle
import { GlobalStyle } from "./styles/global";

// ? theme
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

// ? pages
// import { SignIn } from './pages/SignIn/index.tsx';
// import { SignUp } from './pages/SignUp/index.tsx';
// import { Profile } from './pages/Profile/index.tsx';
// import { New } from './pages/New/index.tsx';
// import { Details } from './pages/Details/index.tsx';
import { Routes } from './routes/index.tsx';
import { AuthProvider } from './hooks/auth.tsx';




const GlobalStyles: any = GlobalStyle;


createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
