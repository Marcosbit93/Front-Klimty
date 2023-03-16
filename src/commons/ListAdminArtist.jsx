import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditRemoveButtons from "./EditRemoveButtons";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBooleano } from "../state/adminProduct";

export default function ListAdminArtist({ item }) {
  // estado para confimar si abro el edit
  const [open, setOpen] = useState(false);
  // estados del edit en el modal
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const dispatch = useDispatch();
  const openModal = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("id");

    if (userId) {
      axios
        .put(`http://localhost:3001/api/artist/${userId}/edit/${item.id}`, {
          title,
          description,
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setTitle("");
    setDescription("");
    dispatch(setBooleano());
    setOpen();
  };

  return (
    <>
      {open ? (
        <Modal open={open} openmodal={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              padding: "45px",
              width: '70%'
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "50px", fontWeight: "bold" }}
            >
              Edit Item
            </Typography>
            <div style={{width: '100%'}}>
              <form onSubmit={(e) => handleSubmit(e, item)}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ marginBottom: "10px", width: "100%", display: "flex", justifyContent: 'center' }}
                />

                <TextField
               multiline
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{ marginBottom: "10px", width: "100%", display: "flex", justifyContent: 'center'  }}
                />

                <Box
                  sx={{ display: "flex", justifyContent: "center", mt: "auto" }}
                >
                  <Button
                    variant="contained"
                    onClick={openModal}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      mt: "auto",
                      width: "100%",
                      length: "30px",
                      marginRight: "8px",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      mt: "auto",
                      width: "100%",
                      length: "30px",
                      marginLeft: "8px",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </div>
          </Box>
        </Modal>
      ) : (
        ""
      )}
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          borderRadius: 0,
          borderBottom: "2px solid #f4f0e8",
          maxWidth: 750,
          flexGrow: 1,
          minHeight: 200,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {item.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {item.description}
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Typography direction="column" component="div">
                {<EditRemoveButtons item={item} openModal={openModal} />}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
