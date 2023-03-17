import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Logo } from "./Logo";
import { BoardUser } from "./BoardUser";
import { SearchInput } from "./SearchInput";
import { Cart } from "./Cart";
import DashboardArtists from "./DashboardArtists";
import DashboardCategories from "./DashboardCategories";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <DashboardArtists />
          <DashboardCategories />
          <SearchInput />
          <BoardUser />
          <Cart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
