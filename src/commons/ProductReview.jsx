import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setReviewRound } from "../state/review";
import { Box } from "@mui/material";

const ProductReview = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/review/product/${id}`)
      .then((data) => {
        if (data.data) {
          setReviews(data.data);
          const averageStar = data.data.reduce((acc, item) => {
            return acc + item.star;
          }, 0);
          dispatch(setReviewRound(averageStar / data.data.length));
        }
      })
      .catch((err) => console.error(err));
  }, [id, dispatch]);

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        {reviews.map((item, i) => {
          return (
            <ListItem alignItems="flex-center">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.user.photo_url} />
              </ListItemAvatar>
              <ListItemText>
                <Typography>{item.user.fullName}</Typography>
              </ListItemText>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography component="legend"></Typography>
                    {item.star === 0 ? '' :  <Rating
                      name="read-only"
                      value={item.star}
                      readOnly
                      precision={0.5}
                    />}
                   {" "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ProductReview;
