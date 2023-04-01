
// react-router-dom components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { userSignUp } from '../../../redux/slices/registerSlice';
import BasicLayout from "../../layouts/BasicLayout";
import TextField from '@mui/material/TextField';
// import ConfirmationEmail from "layouts/authentication/email";

const formSchema = Yup.object({
  email: Yup.string().email(),
  password: Yup.string(),
  password_confirmation: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
}).required();

const RegisterPage = () => {

  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const loading = useSelector((state) => state.userRegister.loading);
  const error = useSelector((state) => state.userRegister.error);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  // let password;
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    getValues,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // password = watch("password", "");

  const showdata = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      const data = getValues();

      dispatch(userSignUp(data)).then((res) => {
        if (res.type === "user/userSignUP/fulfilled") {
          setSuccess(true);
        }
      });
    }
  }, [submitted]);

  return (
    <BasicLayout>
      <Card>
        <Box
          borderRadius="lg"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="black" mt={3}>
            Join us today
          </Typography>
          <Typography display="block" variant="button" color="black" my={1}>
            Fill the fields to get started
          </Typography>
        </Box>
          <Box pt={4} pb={3} px={3}>
            <Box component="form" role="form" onSubmit={handleSubmit(showdata)}>
              <Box mb={2}>
                <TextField
                  label="Name"
                  variant="standard"
                  disabled={loading}
                  fullWidth
                  {...register("user_name", { required: true })}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  type="email"
                  label="Email"
                  variant="standard"
                  disabled={loading}
                  fullWidth
                  {...register("email", { required: true })}
                />
                <p>{errors.email ? errors.email.message : ""}</p>
              </Box>
              <Box mb={2}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    autoComplete="current-password"
                    fullWidth
                    disabled={loading}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
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
                    }
                    label="Password"
                    {...register("password", { required: true })}
                  />
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <Input
                    id="out-basic"
                    disabled={loading}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
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
                    }
                    label="Confirm Password"
                    {...register("password_confirmation")}
                    required
                  />
                  <p sx={{ color: "red", fontSize: "0.5em" }}>
                    {errors.password_confirmation ? errors.password_confirmation.message : ""}
                  </p>
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center" ml={-1}>
                <Checkbox disabled={loading} />
                <Typography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="success"
                  textGradient
                >
                  Terms and Conditions
                </Typography>
              </Box>
              <Box mt={4} mb={1}>
                <Button
                  variant="contained"
                  disabled={loading}
                  type="submit"
                  fullWidth
                >
                  {loading ? "Creating user..." : "Join users"}
                </Button>
              </Box>
              {error.length > 0 && (
                <Box mt={2}>
                  <Typography variant="h6" color="warning">
                    Failed to Sign up. Please tryagain.
                  </Typography>
                </Box>
              )}
              <Box mt={3} mb={1} textAlign="center">
                <Typography variant="button" color="text">
                  Already have an account?{" "}
                  <Typography
                    component={Link}
                    to="/"
                    variant="button"
                    color="success"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign in
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
      </Card>
    </BasicLayout>
  );
}

export default RegisterPage;
