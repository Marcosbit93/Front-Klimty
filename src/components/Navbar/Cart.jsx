import {
  Box,
  Button,
  Divider,
  List,
  SwipeableDrawer,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  addQuantity,
  dropCart,
  minusQuantity,
  setAxiosCart,
} from "../../state/cart";
import axios from "axios";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useNavigate } from "react-router";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/cart/${userId}`)
      .then((cart) => {
        dispatch(setAxiosCart(cart.data.products));
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddQuantity(item) {
    dispatch(addQuantity(item));
    axios
      .post(
        `http://localhost:3001/api/cart/${userId}/update/${item.product.id}`,
        { products: cart }
      )
      .catch((err) => console.error(err));
  }

  function handleMinusQuantity(item) {
    dispatch(minusQuantity(item));
    axios
      .post(
        `http://localhost:3001/api/cart/${userId}/update/${item.product.id}`,
        { products: cart }
      )
      .catch((err) => console.error(err));
  }

  function handleDropCart(item) {
    dispatch(dropCart(item));
    axios
      .post(
        `http://localhost:3001/api/cart/${userId}/update/${item.product.id}`,
        { products: cart }
      )
      .catch((err) => console.error(err));
  }

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer("right", true)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        {cart?.map((item) => (
          <ImageListItem
            sx={{ width: 400, height: 350 }}
            key={item.product.photo_url}
          >
            <img
              src={`${item.product.photo_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.product.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.product.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
              title={`${item.product.name}   ${item.product.price}$`}
              actionIcon={
                <>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <IconButton
                      color="secondary"
                      size="sm"
                      variant="outlined"
                      onClick={() => handleMinusQuantity(item)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography fontWeight="md" color="secondary">
                      {item.quantity}
                    </Typography>
                    <IconButton
                      color="secondary"
                      size="sm"
                      variant="outlined"
                      onClick={() => handleAddQuantity(item)}
                    >
                      <Add />
                    </IconButton>
                  </div>
                  <IconButton
                    onClick={() => handleDropCart(item)}
                    aria-label={`info about ${item.product.name}`}
                  >
                    <DeleteOutlineOutlinedIcon color="secondary" />
                  </IconButton>
                </>
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </List>
      <Divider />

      <List
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
        }}
      >
        <Button
          sx={{ fontSize: "1.5rem" }}
          onClick={() => !userId ?  navigate("/login") : navigate('/checkout')}
        >
          {"CHECKOUT"}
        </Button>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: "2rem" }}
        >
          {cart?.reduce((acc, item) => {
            return acc + item.product.price * item.quantity;
          }, 0)}
        </Typography>
      </List>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={"right"}>
          <Button color="secondary" onClick={toggleDrawer("right", true)}>
            {<ShoppingBasketIcon />}
          </Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
};
