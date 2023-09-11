import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
function StarterDrawer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      <Box>
        {" "}
        <Box>
          <AppBar
            variant="outlined"
            sx={{
              width: [open ? `calc(100% - ${240}px)` : "100%"],
              transition: "260ms ease-in-out all",
              backgroundColor: "white",
            }}
          >
            <Toolbar>
              <MenuIcon
                onClick={() => setOpen(true)}
                sx={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: "1.9rem",
                  marginRight: "1.5rem",
                  cursor: "pointer",
                }}
              />
              <Typography variant="h6" sx={{ color: "black" }}>
                Admin Dashborad
              </Typography>
              <TextField
                placeholder="Search"
                variant="outlined"
                sx={{ marginLeft: "4rem", width: "17rem" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <Box
                sx={{
                  textAlign: "right",
                  marginLeft: "auto",
                  marginRight: "3rem",
                }}
              >
                <Badge badgeContent={4} color="success">
                  <MessageIcon
                    sx={{
                      color: "black",
                      fontSize: "1.7rem",
                      marginLeft: "1.2rem",
                    }}
                  />
                </Badge>
                <Badge badgeContent={4} color="success">
                  <MessageIcon
                    sx={{
                      color: "black",
                      fontSize: "1.7rem",
                      marginLeft: "1.2rem",
                    }}
                  />
                </Badge>

                <Badge badgeContent={4} color="success">
                  <MessageIcon
                    sx={{
                      color: "black",
                      fontSize: "1.7rem",
                      marginLeft: "1.2rem",
                    }}
                  />
                </Badge>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            sx={{ transition: "260ms ease-in-out all" }}
          >
            <List disablePadding sx={{ width: "15rem" }}>
              <ListItem>
                <ListItemText sx={{ textAlign: "right" }}>
                  {" "}
                  <KeyboardArrowRightIcon
                    onClick={() => setOpen(false)}
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "1.9rem",
                      cursor: "pointer",
                    }}
                  />
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem component={Button} onClick={() => navigate("/")}>
                <HomeIcon
                  sx={{
                    color: "black",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    marginRight: "1.5rem",
                    cursor: "pointer",
                  }}
                />
                <ListItemText sx={{ color: "black" }}> Home</ListItemText>
              </ListItem>
              <ListItem component={Button} onClick={() => navigate("/About")}>
                <AssessmentIcon
                  sx={{
                    color: "black",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    marginRight: "1.5rem",
                    cursor: "pointer",
                  }}
                />
                <ListItemText sx={{ color: "black" }}> About</ListItemText>
              </ListItem>
              <ListItem
                component={Button}
                onClick={() => navigate("/products")}
              >
                <ShoppingCartIcon
                  sx={{
                    color: "black",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    marginRight: "1.5rem",
                    cursor: "pointer",
                  }}
                />
                <ListItemText sx={{ color: "black" }}> Products</ListItemText>
              </ListItem>
              <ListItem component={Button} onClick={() => navigate("/setting")}>
                <SettingsIcon
                  sx={{
                    color: "black",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    marginRight: "1.5rem",
                    cursor: "pointer",
                  }}
                />
                <ListItemText sx={{ color: "black" }}> Setting</ListItemText>
              </ListItem>
            </List>
          </Drawer>

          <Box
            sx={{
              borderRight: "black 0px solid",
              boxShadow: "0 0 5px 0 gray",
              height: "100vh",
              width: "5rem",
              paddingTop: "5.5rem",
            }}
          >
            <List disablePadding sx={{ width: "15rem" }}>
              <ListItem>
                <ListItemText>
                  {" "}
                  <HomeIcon
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "2.1rem",
                      marginRight: "1.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/")}
                  />
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {" "}
                  <AssessmentIcon
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "2.1rem",
                      marginRight: "1.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/About")}
                  />
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {" "}
                  <ShoppingCartIcon
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "2.1rem",
                      marginRight: "1.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/products")}
                  />
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {" "}
                  <SettingsIcon
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "2.1rem",
                      marginRight: "1.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/setting")}
                  />
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default StarterDrawer;
