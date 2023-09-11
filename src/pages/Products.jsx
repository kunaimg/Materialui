import {
  Box,
  Checkbox,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
  Modal,
  MenuList,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import StarterDrawer from "../componenets/StarterDrawer";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import SearchIcon from "@mui/icons-material/Search";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: "0 0 5px 0 gray",
  pt: 2,

  px: 4,
  pb: 3,
  textAlign: "center",
};
function Products() {
  const navigate = useNavigate();
  const rowsPerPageOptions = [5, 10, 25]; // Available options for rows per page
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const data = [
    { name: "John Doe", Price: 30, Catogoary: "Laptop", Date: "14-23-1023" },
    { name: "Jane Smith", Price: 25, Catogoary: "Laptop", Date: "14-23-1023" },
    { name: "Bob Johnson", Price: 35, Catogoary: "Laptop", Date: "14-23-1023" },
    { name: "John Doe", Price: 30, Catogoary: "Laptop", Date: "14-23-1023" },

    // Add more data here
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page number when changing rows per page
  };
  const menuItem = (
    <Menu open={menu} sx={{ position: "absolute" }}>
      <MenuItem
        onClick={() => {
          setMenu(false);
          navigate("/");
        }}
        component={Button}
      >
        Home
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenu(false);
          navigate("/about");
        }}
        component={Button}
      >
        About
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenu(false);
          navigate("/setting");
        }}
        component={Button}
      >
        Setting
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenu(false);
          navigate("/products");
        }}
        component={Button}
      >
        Prouducts
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
        }}
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "0.6rem", fontWeight: 700 }}
          >
            Edit Product
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label="Price" variant="outlined" />
            <Box sx={{ position: "relative" }}>
              {" "}
              <TextField
                label="Admin Pages Go"
                variant="outlined"
                sx={{ marginLeft: "0.3rem" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ marginLeft: "8rem" }}
                        onClick={() => setMenu(true)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  disableAnimation: true, // Disable label animation when clicked
                }}
              />
              {menuItem}
            </Box>
          </Box>
          <Button
            sx={{ marginTop: "1rem" }}
            color="secondary"
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <StarterDrawer />
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          width: "100%",
          paddingTop: "5rem",
          paddingLeft: "1rem",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ width: "94%", marginLeft: "1rem" }}
        >
          <Box sx={{ textAlign: "left", padding: "0.5rem" }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Product Lists
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              justifyContent: "space-between",
              display: "flex",
              paddingRight: "4rem",
            }}
          >
            <TextField
              placeholder="Search"
              variant="outlined"
              sx={{ marginLeft: "1rem", width: "22rem" }}
              size="small"
              label="search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                disableAnimation: true, // Disable label animation when clicked
              }}
            />
            <Button
              endIcon={<AddCircleOutlineIcon />}
              color="secondary"
              variant="contained"
              onClick={() => setModal(true)}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Price </TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Catogory</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.Price}</TableCell>
                    <TableCell>{row.Catogoary}</TableCell>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>
                      <EditIcon sx={{ color: "blue" }} />
                      <DeleteIcon sx={{ marginLeft: "1rem", color: "red" }} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Products;
