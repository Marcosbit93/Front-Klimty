import React, { useEffect } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../state/cart";
import axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const cart = useSelector((state) => state.cart);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddCart = () => {
    dispatch(setCart({ product: detail, quantity: 1 }));
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
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={detail?.name} subheader={detail?.artist.title} />
        <CardMedia
          component="img"
          height="194"
          image={detail?.photo_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            ${detail?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail?.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail?.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartOutlinedIcon onClick={handleAddCart} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>REVIEW</Typography>
            <Typography paragraph>REVIEW ID</Typography>
            <Typography paragraph>REVIEW TEXT.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default ProductCard;