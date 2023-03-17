import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
//import react tags
import "react-tagsinput/react-tagsinput.css";
import AddButton from "./AddButton";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ModalAddArtist() {
  // estado para confimar si abro el edit
  const [open, setOpen] = useState(false);
  // estados del edit en el modal
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistId, setArtistId] = useState("");

  const openModal = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("id");

    if (userId) {
      axios
        .post(`http://localhost:3001/api/artist/${userId}/add/`, {
          title,
          description,
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setTitle("");
    setDescription("");
    setOpen(!open);
  };

  return (
    <>
      <div>
        <AddButton openModal={openModal} />
      </div>

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
              width: 300,
              height: 350,
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "50px", fontWeight: "bold" }}
            >
              Add Artist
            </Typography>
            <div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ marginBottom: "15px", width: "100%", display: "block" }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{ marginBottom: "15px", width: "100%",display: "block" }}
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
                    Add
                  </Button>
                </Box>
              </form>
            </div>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
