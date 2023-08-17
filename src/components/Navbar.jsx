/* eslint-disable react/prop-types */
// @ts-nocheck
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { colors } from "../constants";

const pages = ["Home", "movies", "what's new"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.appbarBG,
        paddingTop: 3,
      }}
    >
      <Toolbar disableGutters>
        <Grid
          container
          alignItems="center"
          display={{ xs: "none", md: "flex" }}
          direction="row"
          justifyContent={"space-between"}
        >
          <Grid item>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  paddingLeft: 2,
                  fontFamily: "Fraunces",
                  fontWeight: 900,
                  fontSize: 25,
                  color: colors.white,
                  textDecoration: "none",
                }}
              >
                ShowTime
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignSelf: "end",
                justifySelf: "end",
                marginRight: 5,
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: colors.white, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          display={{ xs: "flex", md: "none" }}
          sx={12}
          direction={"row"}
          xs={{
            flexDirection: "row",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Fraunces",
              fontWeight: 900,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            ShowTime
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
