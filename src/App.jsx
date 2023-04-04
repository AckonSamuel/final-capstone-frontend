import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "./createEmotionCache";
import pxToRem from "./theme/pxToRem";
import linearGradient from  './theme/linearGradient';
import rgba from './theme/rgba';
import hexToRgb from "./theme/hexToRgb";
import routes from './routes';
import { useMaterialUIController, setMiniSidenav } from "./context";
import Sidenav from "./components/SideNav";

const theme = createTheme({
  functions: {
    pxToRem,
    linearGradient,
    hexToRgb,
    rgba
  },
});

const App = () => {
  const [controller, dispatch] = useMaterialUIController();

  const { miniSidenav, layout } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  const cache = createEmotionCache();

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) => allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  })


  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
        <Sidenav
          brandName="ClubWeb"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      )}
          <Routes>{getRoutes(routes)}</Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;