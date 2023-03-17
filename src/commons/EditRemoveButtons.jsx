import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function EditRemoveButtons({ item, openModal }) {
    // funcion para destruir el item en el back
    const handleClick = useCallback((item) => {
      localStorage.setItem("productId", item.id);
      const userId = localStorage.getItem("id");
      axios
        .delete(`http://localhost:3001/api/product/${userId}/${item.id}`)
        .then((res) => {
          console.log(res);
        });
    }, []);


  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, margin: "auto auto auto 0" }}>
      <Fab color="secondary" aria-label="edit">
        <EditIcon onClick={() => openModal()} />
      </Fab>
      <Fab color="error">
        <DeleteIcon onClick={() => handleClick(item)} />
      </Fab>
    </Box>
  );
}
