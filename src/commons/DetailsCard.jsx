import React, { useEffect } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../state/cart";
import axios from "axios";

const DetailsCard = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const cart = useSelector((state) => state.cart);

  const handleAddCart = () => {
    dispatch(setCart({ product: detail, quantity: 1 }));
  };

  const handleOnClick = () => {
    window.history.back();
  };

  useEffect(() => {
    axios
      .post(`http://localhost:3001/api/cart/${userId}/update/${detail.id}`, {
        products: cart,
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="100%"
          image={detail?.photo_url}
          alt="print"
          sx={{boxShadow: 10, width: 600, margin: 10 }}
        />

        <CardContent>
          <Divider
            orientation="vertical"
            textAlign="center"
            sx={{ width: [100, 200, 300], mx:20 }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {detail?.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {detail?.artist.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              ${detail?.price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {detail?.category}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {detail?.description}
            </Typography>
            <IconButton aria-label="add to favorites">
              <AddShoppingCartOutlinedIcon onClick={handleAddCart} />
            </IconButton>
          </Divider>
        </CardContent>
      </div>
      <div>
        <CardContent sx={{ m: 10 }}>
          <Typography paragraph>REVIEW</Typography>
          <Typography paragraph>REVIEW ID</Typography>
          <Typography paragraph>REVIEW TEXT.</Typography>
        </CardContent>
      </div>
      <Button variant="text" onClick={handleOnClick} sx={{px:90}}>
        <ArrowBackIosNewOutlinedIcon color="black"/> GO BACK
      </Button>
    </>
  );
};

export default DetailsCard;