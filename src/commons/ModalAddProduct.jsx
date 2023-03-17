import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditRemoveButtons from "./EditRemoveButtons";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBooleano } from "../state/adminProduct";
import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";
//import react tags
import ReactTags from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import AddButton from "./AddButton";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ModalAddProduct() {
  // estado para confimar si abro el edit
  const [open, setOpen] = useState(false);
  // estados del edit en el modal
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [artists, setArtists] = useState([]);
  const [artistId, setArtistId] = useState("");

  const openModal = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    const photo_url =
      "https://www.artic.edu/iiif/2/23bb6125-d75b-1648-dc91-8c2a45ed3d88/full/843,/0/default.jpg";
    e.preventDefault();
    const userId = localStorage.getItem("id");

    if (userId) {
      console.log("el artista enviado ID", artistId);
      axios
        .post(`http://localhost:3001/api/product/${userId}/add/`, {
          name,
          price,
          description,
          category,
          photo_url,
          artistId,
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setOpen(!open);
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/artist`).then((data) => {
      const artistsBack = data.data;
      console.log(data.data);
      const artists = artistsBack.map((artist) => artist.title);
      setArtists(artists);
    });
  }, [open]);

  //manejo del menu artistas
  const [anchorEl, setAnchorEl] = useState(null);
  const openArtist = Boolean(anchorEl);
  const handleClose = (data) => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
              Add Item
            </Typography>
            <div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ marginBottom: "10px", width: "100%", display: "block" }}
                />
                <TextField
                  label="Price"
                  variant="outlined"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  sx={{ marginBottom: "8px", width: "100%", display: "block" }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{ marginBottom: "10px", width: "100%", display: "block" }}
                />
                <ReactTags
                  inputAttributes={{ style: { width: "100%" } }}
                  value={category}
                  onChange={setCategory}
                  inputProps={{ placeholder: "Add category" }}
                  sx={{ marginBottom: "8px", width: "100%", display: "block" }}
                />
                <Button
                  id="basic-button"
                  aria-controls={openArtist ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openArtist ? "true" : undefined}
                  onClick={handleClick}
                >
                  Artists
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openArtist}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {artists.map((artist, i) => {
                    return (
                      <MenuItem key={i} onClick={() => setArtistId(i + 1)}>
                        {artist}
                      </MenuItem>
                    );
                  })}
                </Menu>

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
