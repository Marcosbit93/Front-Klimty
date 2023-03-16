import { Button, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";

export const Search = ({ setSearch, handleClick }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextField
        color="secondary"
        id="filled-basic"
        label="Search"
        variant="filled"
        onChange={(e) => handleSearchChange(e)}
      >
        <SearchOutlinedIcon />
      </TextField>
      <Button onClick={handleClick}>SEARCH</Button>
    </>
  );
};
