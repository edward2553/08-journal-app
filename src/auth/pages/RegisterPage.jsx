import { Alert, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "EL password debe de tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    console.log(isFormValid);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="user@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          {/* {!!errorMessage && (
            <Box sx={{mb: 2}}>
              <Typography color={'red'} >{errorMessage}</Typography>
            </Box>
          )} */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid display={!!errorMessage ? '' : 'none'} item xs={12} sm={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button disabled={isCheckingAuthentication} type="submit" variant={"contained"} fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
