import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useMaterialUIController, setLayout } from '../../context';

const DashboardLayout = ({ children }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  const StyledContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: 3,

    [theme.breakpoints.up.xl]: {
      marginLeft: miniSidenav ? theme.functions.pxToRem(120) : theme.functions.pxToRem(274),
      transition: theme.transitions.create(['margin-left', 'margin-right'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    },
  }));

  useEffect(() => {
    setLayout(dispatch, 'dashboard');
  }, [pathname, dispatch]);

  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
