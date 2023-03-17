import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../state/menu";
import { setData } from "../../state/data";

const DashboardArtists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const type = useSelector((state) => state.type);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setMenu("artist"));
  };

  // Search the artists artworks [1]
  const handleClose = (data) => {
    setAnchorEl(null);
    axios
      .get(`http://localhost:3001/api/search/artworks/${data}`)
      .then((res) => {
        dispatch(setData(res.data));
      })
      .then(() => {
        navigate("/");
      });
  };

  // Search artists [2]
  const [artists, setArtists] = useState([]);
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/${menu}`).then((data) => {
      const artistsBack = data.data;
      const artists = artistsBack.map((artist) => artist.title);
      setArtists(artists);
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
