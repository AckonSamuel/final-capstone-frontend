import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useMaterialUIController, setLayout } from '../../context';


const DashboardLayout = ({ children }) => {
    const [controller, dispatch ] = useMaterialUIController();
    const { miniSidenav } = controller;
    const { pathname } = useLocation();

    const StyledContainer = styled(Box)(({ theme }) => ({
        postion: "relative",
        padding: 3,
    
        [theme.breakpoint.up['xl']]: {
            marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
            transition: theme.transitions.create(["margin-left", "margin-right"], {
                easing:theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
            })
        }
    }));

    useEffect(() => {
        setLayout(dispatch, "dashboard");
    }, [dispatch]);

    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

DashboardLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}