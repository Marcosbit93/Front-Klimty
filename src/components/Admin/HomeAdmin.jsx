import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const HomeAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography>Hey Amdmin!</Typography>
      <Typography>What do you want to do?</Typography>
      <Box>
        <Button>
          <Link variant="contained" to="/admin/user">
            User
          </Link>
        </Button>
        <Button>
          <Link variant="contained" to="/admin/artist">
            Artist
          </Link>
        </Button>
        <Button>
          <Link variant="contained" to="/admin/product">
            Product
          </Link>
        </Button>
      </Box>
    </>
  );
};
