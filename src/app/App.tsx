import { BrowserRouter } from "react-router-dom";
import { Router } from "../routes/Router";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { blue } from "@mui/material/colors";

export const App = () => {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
  typography: {
    // fontSize: 16,
  }
});