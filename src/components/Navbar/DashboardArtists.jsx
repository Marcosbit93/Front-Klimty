import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../state/menu";
import { setData } from "../../state/data";

const DashboardArtists = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setMenu("artist"));
  };
  const handleClose = (data) => {
    setAnchorEl(null);
    axios
      .get(`http://localhost:3001/api/search/artworks/${data}`)
      .then((res) => {
        dispatch(setData(res.data));
      });
  };

  // busqueda de artistas
  const [artists, setArtists] = useState([]);
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/${menu}`).then((data) => {
      const artistsBack = data.data;
      const artists = artistsBack.map((artist) => artist.title);
      setArtists(artists);
      console.log("esto llega del back", artists);
    });
  }, [menu]);

  return (
    <div>
      <Button
        color="secondary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Artists
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {artists.map((artist, index) => {
          return (
            <MenuItem key={index} onClick={() => handleClose(artist)}>
              {artist}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DashboardArtists;
