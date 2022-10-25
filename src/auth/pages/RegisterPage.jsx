import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Your name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="user@email.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={12}>
              <Button variant={"contained"} fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent="end">
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
