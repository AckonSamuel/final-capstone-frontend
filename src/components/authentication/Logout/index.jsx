/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, forwardRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { userLogout } from '../../../redux/slices/logoutSlice';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loading = useSelector((state) => state.userLogout.loading, shallowEqual);
  // const error = useSelector((state) => state.userLogout.error, shallowEqual);

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      dispatch(userLogout()).then((res) => {
        if (res.type === 'user/userLogout/fulfilled') {
          setOpen(false);
          navigate('/');
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  const handleLogout = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Button color="error" onClick={handleClickOpen}>
        Logout
      </Button>
      <Box component="form" role="form">
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          {' '}
          {loading ? (
            <Box p={7} display="flex" justifyItems="space-between" gap="1em">
              <CircularProgress color="success" />
              <Typography component="h6" color="success">
                Signing out...
              </Typography>
            </Box>
          ) : (
            <>
              <DialogTitle>Are you sure you want to logout?</DialogTitle>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  sx={{
                    color: 'success',
                    backgroundColor: 'white',
                    borderColor: 'error.main',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  sx={{
                    color: 'error',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                  }}
                  onClick={handleLogout}
                >
                  Yes
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </>
  );
};

export default Logout;
