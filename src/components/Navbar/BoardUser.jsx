import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";

export const BoardUser = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [photo, setPhoto] = React.useState("");

    const settings = ['Profile', 'Logout'];

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        setPhoto(user.photoURL)
    })
},[])

  return (
    <> 
{console.log(photo)}
    <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={`${photo}`} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
             {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
          </Menu>
        </Box>
      </>
  )
}
