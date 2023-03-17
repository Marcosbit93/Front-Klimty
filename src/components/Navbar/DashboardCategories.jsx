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

const DashboardCategories = () => {
  // busqueda de categorias
  const [categories, setCategories] = useState([]);
  const menu = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setMenu("categories"));
  };
  const handleClose = (data) => {
    setAnchorEl(null);
    axios
      .get(`http://localhost:3001/api/search/products/${data}`)
      .then((res) => {
        dispatch(setData(res.data));
      })
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/search/${menu}`).then((data) => {
      setCategories(data.data);
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
        Categories
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
        {categories?.map((category, index) => {
          return (
            <MenuItem key={index} onClick={() => handleClose(category)}>
              {category}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DashboardCategories;
