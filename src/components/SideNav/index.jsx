import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SidenavCollapse from './SidenavCollapse';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';
import Logout from '../authentication/Logout';
import { useMaterialUIController, setMiniSidenav } from '../../context';

const Sidenav = ({ color, brand, brandName, routes, ...rest }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace('/', '');

  let textColor = 'white';

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    const handleMiniSidenav = () => {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleMiniSidenav);

    handleMiniSidenav();

    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, location]);

  const renderRoutes = routes.map(({ type, route_name, icon, key, route }) => {
    if (type === 'collapse') {
        return (<NavLink key={key} to={route}>
        <SidenavCollapse route_name={route_name} icon={icon} active={key === collapseName} />
      </NavLink> )
    }

    return null;
});

  return (
    <SidenavRoot
      {...rest}
      variant='permanent'
      ownerState={{ miniSidenav }}
    >
      <Box pt={3} pb={1} px={4} textAlign='center'>
        <Box
            position='absolute'
            display={ window.innerWidth < 1200 ? 'block' : 'none'}
            top={0}
            right={0}
            p={1.625}
            cursor='pointer'
          onClick={closeSidenav}
        >
          <Typography variant='h6' color='secondary'>
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </Typography>
        </Box>
        <Box component={NavLink} to='/' display='flex' alignItems='center'>
          {brand && <Box component='img' src={brand} alt='Brand' width='2rem' />}
          <Box
            width={!brandName && '100%'}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <Typography component='h6' variant='button' fontWeight='medium' color={textColor}>
              {brandName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>{renderRoutes}</List>
      <Box
        sx={{
          marginTop: 'auto',
          marginBottom: '2em',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Logout />
      </Box>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: 'success',
  brand: '',
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success',]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
