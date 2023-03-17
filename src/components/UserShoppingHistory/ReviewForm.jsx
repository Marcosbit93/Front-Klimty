import React, { useState } from "react";

import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-hot-toast";


const ReviewForm = ({ product }) => {
  const userId = localStorage.getItem("id");
  const productId = product.id;
  const [description, setDescription] = useState("");
  const [star, setStar] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description && !star) {
      return toast.error("You have to complete at least one field");
    }

    axios
      .post(`http://localhost:3001/api/review/${userId}/${productId}`, {
        description,
        star,
      })
      .then(() => {
        toast.success("Review added successfully");
      })
      .catch(() => toast.error("You review could not be added"));
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-multiline-static"
          label="Add a written review"
          multiline
          rows={7}
          placeholder="Here!"
          variant="standard"
          onChange={(e) => setDescription(e.target.value)}
        />
        <ButtonGroup variant="text" aria-label="text button group">
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={0}
              precision={0.5}
              size="large"
              onChange={(e) => setStar(e.target.value)}
            />
          </Stack>
        </ButtonGroup>
        <Box sx={{ "& button": { m: 1 } }}>
          <Button size="small" type="submit">
            Done!
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ReviewForm;
