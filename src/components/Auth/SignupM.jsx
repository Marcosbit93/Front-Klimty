import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { signUp, signUpGoogle, signUpFacebook } from "../../utils/functions";
import { auth } from "../../utils/firebaseConfig";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export const SignupM = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(auth, email, password, name, lastName);
  };
  const handleSignUpGoogle = () => {
    signUpGoogle(auth);
  };
  const handleSignUpFacebook = () => {
    signUpFacebook(auth);
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
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullwidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullwidth
            id="lastName"
            label="lastName"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullwidth
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
            fullwidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullwidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignUp}
          >
            Create Account
          </Button>
          <Button
            sx={{ mt: 3, mb: 2 }}
            fullwidth
            onClick={handleSignUpGoogle}
            variant="outlined"
          >
            <GoogleIcon /> SignUp with Google
          </Button>
          <Button
            sx={{ mt: 3, mb: 2 }}
            fullwidth
            onClick={handleSignUpFacebook}
            variant="outlined"
          >
            <FacebookIcon /> SignUp with Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
