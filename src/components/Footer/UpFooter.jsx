import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const styleText = { textDecorationLine: "none", color: "#6e44ff"};

const UpFooter = () => {

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={false} centered>
          <h4>ABOUT US</h4>
          <Tab label="" disabled></Tab>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Demo>
                  <List dense={false}>
                    <ListItem>
                      <a
                        href="https://github.com/jalarg"
                        target="_blank"
                        rel="noreferrer"
                        style={styleText}
                      >
                        <ListItemText primary="Javier Lema" />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://github.com/julietamag"
                        target="_blank"
                        rel="noreferrer"
                        style={styleText}
                      >
                        <ListItemText primary="Julieta Magnago" />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://github.com/Marcosbit93"
                        target="_blank"
                        rel="noreferrer"
                        style={styleText}
                      >
                        <ListItemText primary="Marcos Bolonese" />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a href="https://github.com/NicholasInchauspe2" target="_blank" 
                      rel="noreferrer" style={styleText}>
                        <ListItemText primary="Nicholas Inchauspe" />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a href="https://github.com/thep3Dr0" target="_blank" 
                      rel="noreferrer" style={styleText}>
                        <ListItemText primary="Pedro Ragni" />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://github.com/RosannaContasti"
                        target="_blank"
                        rel="noreferrer"
                        style={styleText}
                      >
                        <ListItemText primary="Rosanna Contasti" />
                      </a>
                    </ListItem>
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </Box>
          <h4>PARTNERSHIP</h4>
          <Tab label="" disabled></Tab>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Demo>
                  <List dense={false}>
                    <ListItem>
                      <a href="https://github.com/germanriv" target="_blank" 
                      rel="noreferrer" style={styleText}>
                        <ListItemText primary="German Rivarola" />
                      </a>
                    </ListItem>
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </Box>
          <h4>SUPPORT</h4>
          <Tab label="" disabled></Tab>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Demo>
                  <List dense={false}>
                    <ListItem>
                      <a
                        href="https://www.plataforma5.la/"
                        target="_blank"
                        rel="noreferrer"
                        style={styleText}
                      >
                        <ListItemText primary="PLATAFORMA 5" />
                      </a>
                    </ListItem>
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </Box>
        </Tabs>
      </Box>
    </div>
  );
};

export default UpFooter;
