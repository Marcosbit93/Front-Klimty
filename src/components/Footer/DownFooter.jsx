import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Tabs from "@mui/material/Tabs";
import UpFooter from "./UpFooter";

const DownFooter = () => {
  return (
    <div>
      <Paper
        sx={{
          marginTop: "calc(10% + 60px)",
          width: "100%",
          bottom: 0,
        }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >

         { /*  <div>
              <image src="" width={75} height={30} alt="Logo" />
          </div>*/}
          
          </Box>
          <UpFooter />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2023. [Klimty]
            </Typography>
          </Box>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={false} centered>
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />.
            </Tabs>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

export default DownFooter;
