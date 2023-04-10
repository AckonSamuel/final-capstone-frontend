// @mui material components
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export default styled(Drawer)(({ theme, ownerState }) => {
  const { transitions, breakpoints, functions } = theme;
  const { miniSidenav } = ownerState;

  const { pxToRem } = functions;

  const sidebarWidth = 250;
  const backgroundValue = '#adcc12';

  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: 'translateX(0)',
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      marginBottom: 'inherit',
      left: '0',
      width: sidebarWidth,
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      marginBottom: 'inherit',
      left: '0',
      width: pxToRem(96),
      overflowX: 'hidden',
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    '& .MuiDrawer-paper': {
      border: 'none',

      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
