import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useMaterialUIController, setLayout } from '../../context';

const AuthenticationLayout = ({ children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, 'page');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
      sx={{ overflowX: 'hidden' }}
    >
      {children}
    </Box>
  );
};

AuthenticationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticationLayout;
