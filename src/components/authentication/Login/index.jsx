/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import BasicLayout from '../../layouts/BasicLayout';
import { userLogin } from '../../../redux/slices/loginSlice';

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const loading = useSelector((state) => state.userLogin.loading);
  const error = useSelector((state) => state.userLogin.error);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const {
    register,
    handleSubmit,
    getValues,
  } = useForm();

  const showdata = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      const data = getValues();

      dispatch(userLogin(data)).then((res) => {
        if (res.type === 'users/usersLogin/fulfilled') {
          navigate('/home');
        }
      });
    }
    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, dispatch]);

  return (
    <BasicLayout>
      <Card>
        <Box
          borderRadius="lg"
          mx={2}
          mt={-5}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={0.4}>
            Sign in
          </Typography>
        </Box>

        <Box p={2} component="form" role="form" onSubmit={handleSubmit(showdata)}>
          {error.length > 0 && (
            <Box mt={2}>
              <Typography variant="h6" color="warning">
                Sign in Failed. Invalid credentials.
              </Typography>
            </Box>
          )}

          <Box mb={2}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-email"
                autoComplete="current-email"
                fullWidth
                disabled={loading}
                type="email"
                label="email"
                {...register('email', { required: true })}
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                autoComplete="current-password"
                fullWidth
                disabled={loading}
                type={showPassword ? 'text' : 'password'}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
                label="Password"
                {...register('password', { required: true })}
              />
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center" ml={-1}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <Typography
              variant="button"
              fontWeight="regular"
              color="text"
              onClick={handleSetRememberMe}
              sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
            >
              &nbsp;&nbsp;Remember me
            </Typography>
          </Box>

          <Box mt={4} mb={1}>
            <Button disabled={loading} variant="contained" type="submit" fullWidth>
              {loading ? 'Authenticating user...' : 'Sign in'}
            </Button>
          </Box>
          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              Don&apos;t have an account?
              {' '}
              <Typography
                component={Link}
                disabled={loading}
                to="/register"
                variant="button"
                color="success"
                fontWeight="medium"

              >
                Sign up
              </Typography>
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography
              component={Link}
              disabled={loading}
              to="/email-for-password-reset"
              variant="button"
              color="warning"
              fontWeight="medium"

            >
              Forgot password?
            </Typography>
          </Box>
        </Box>

      </Card>
    </BasicLayout>
  );
}

export default Basic;
