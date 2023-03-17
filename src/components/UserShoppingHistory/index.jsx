import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import PurchasedProducts from "../UserShoppingHistory/PurchasedProducts";

const ShoppingHistory = () => {
  const userId = localStorage.getItem("id");
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/checkout/${userId}/history`)
      .then((res) => setPurchase(res.data));
  }, []);

  return (
    <Box sx={{ margin: 15 }} >
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table aria-label="collapsible table">
          <TableBody>
            {purchase.map((row, i) => (
              <PurchasedProducts key={i} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShoppingHistory;
