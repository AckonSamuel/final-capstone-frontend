import { useLocation, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import {
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from './styles';

import {
  useMaterialUIController,
  setMiniSidenav,
} from '../../context';

const Navbar = () => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const route = useLocation().pathname.split('/').slice(1);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const isMini = window.innerWidth < 1200;
  return (
    <AppBar
      position="absolute"
      color="inherit"
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <Box color="inherit" mb={{ xs: 1 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
        </Box>
        {isMini && (
          <Box sx={(theme) => navbarRow(theme, { isMini })}>
            <Box color="white">
              <Link to="/profile">
                <IconButton sx={navbarIconButton} size="small" disableRipple>
                  <Icon>account_circle</Icon>
                </IconButton>
              </Link>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={{ color: 'black' }} fontSize="medium">
                  {miniSidenav ? 'menu_open' : 'menu'}
                </Icon>
              </IconButton>
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
