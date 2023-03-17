import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Box,
  Typography,
  CardMedia,
  Card,
  Grid,
} from "@mui/material/";

const ErrorPage = () => {
  const photo =
    "https://i.pinimg.com/564x/68/39/77/683977522689f84f9af0c18b0e070622.jpg";
  return (
    <div>
      <Container fixed>
        <Box
          sx={{
            flexGrow: 2,
            justifyContent: "center",
            display: "flex",
            my: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="initial">
            <h1>ERROR 404</h1>
            <h2>Something's wrong.</h2>
            <h2>...And he knows it</h2>
          </Typography>
        </Box>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" image={photo} alt="Photo" />
          </Card>
        </Grid>
        <Box
          sx={{
            flexGrow: 2,
            justifyContent: "center",
            display: "flex",
            my: 5,
          }}
        >
          <Typography variant="but{ton" display="block" gutterBottom>
              <Link to="/" style={{textDecoration:"none"}}>Go back to KLIMTY</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default ErrorPage;
