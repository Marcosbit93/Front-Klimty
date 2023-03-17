import React from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableFooter from "@mui/material/TableFooter";
import ReviewModal from "./ReviewModal"

const PurchasedProducts = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
            <Typography variant="h4">
            Purchase #{row.cartId}
            </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                CART ID #{row.cartId}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Price (u)</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                    <TableCell align="right">Review</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cart.products.map((historyRow, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {historyRow.product.updatedAt}
                      </TableCell>
                      <TableCell>{historyRow.product.name}</TableCell>
                      <TableCell>$ {historyRow.product.price}</TableCell>
                      <TableCell align="right">{historyRow.quantity}</TableCell>
                      <TableCell align="right">
                        $ {Math.round(
                          historyRow.quantity * historyRow.product.price * 100
                        ) / 100}
                      </TableCell>
                      <TableCell align="right"><ReviewModal product={historyRow.product}/></TableCell>
                    </TableRow>
                  ))}
                  <TableFooter variant="footer">
                    <TableRow hover="true" align="right">
                      <Typography variant="h5" color="text.secondary">
                        Total($) {row.cart.products?.reduce((amount, item) => {
                            return amount + (item.product.price * item.quantity)
                        }, 0)} 
                      </Typography>
                    </TableRow>
                  </TableFooter>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default PurchasedProducts;