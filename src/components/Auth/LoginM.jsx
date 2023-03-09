import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import { logIn, signUpGoogle } from "../../utils/functions";
import { auth } from "../../utils/firebaseConfig";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { setUid } from "../../state/uid";
import { onAuthStateChanged } from "firebase/auth";





export const LoginM = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();



  const handleLogIn = (e) => {
    e.preventDefault()
    logIn(auth, email, password);
    onAuthStateChanged(auth, (user) => {
      dispatch(setUid(user.uid))
      window.location.href = "/";
    });
  };

  
  const handleSignUpGoogle = () => {
    signUpGoogle(auth);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
           Log in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
         
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogIn}
          >
         Log In
          </Button>
          <Button
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            onClick={handleSignUpGoogle}
            variant="outlined"
          >
            <GoogleIcon /> logIn with Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};