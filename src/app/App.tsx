import { BrowserRouter } from "react-router-dom";
import { Router } from "../routes/Router";
import { CssBaseline } from "@mui/material";

export const App = () => {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
};

