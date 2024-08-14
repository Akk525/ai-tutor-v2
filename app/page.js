'use client'
import Image from "next/image";
import * as React from 'react';
import { useState } from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Tooltip, Avatar, Menu, MenuItem, Stack, CircularProgress} from "@mui/material";
import ChatPage from './ChatPage';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
let user = "Ritkriti";
let progress = 70;

function SpeedometerProgressBar({ value }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        sx={{
          color: value < 50 ? "error.main" : value < 80 ? "warning.main" : "success.main",
          transform: "rotate(-90deg) !important",
          borderRadius: "50%",
          strokeLinecap: "round",
          strokeWidth: 8,
        }}
        size={300}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="div" color="textPrimary">
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Home() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {/* Page Menu: Start */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LearnIT
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Toolbar>
        </AppBar>
      </Box>

    {/* Page Menu: End */}

    {/* Container Component: Start */}
    <Stack>
      <Box height="45vh" margin="1%" sx={{ boxShadow: 2 }} borderRadius={5}>
        <Stack direction="row" display="flex" padding="1%" alignItems="center" justifyContent="center">
          <Box width="50%">
            <Typography variant="h1">Hi {user}!</Typography>
            <Typography variant="h4">Looks like you are making some progress!</Typography>
          </Box>
          <Box
            width="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <SpeedometerProgressBar value={progress} />
          </Box>
        </Stack>
      </Box>

      <Box margin="1%" sx={{
    boxShadow: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  borderRadius={5}
  height="39vh"
>
  <Stack
    direction="row"
    padding="1%"
    alignItems="center"
    justifyContent="space-evenly"
    sx={{ width: "100%" }}
  >
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={handleOpenChat}
    >
      <Typography color="white">Chemistry</Typography>
    </Box>
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlq8efJYz16TnXMfiqDjnZk8Y63Gvjj3sAow&s')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={handleOpenChat}
    >
      <Typography color="white">Biology</Typography>
    </Box>
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://wallpapers.com/images/hd/cool-math-okpsr0q1zzn8j61i.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={() => {
        alert("Clicked!");
      }}
    >
      <Typography color="white">Mathematics</Typography>
    </Box>
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMML_PDVO8B1M3naJp9J0wFbs5zFbdbTAH6g&s')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={() => {
        alert("Clicked!");
      }}
    >
      <Typography color="white">Economics</Typography>
    </Box>
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://thumbs.dreamstime.com/b/german-tricolor-flag-horizontal-stripes-german-flag-horizontal-stripes-german-flag-cool-grunge-texture-vector-flag-161319265.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={() => {
        alert("Clicked!");
      }}
    >
      <Typography color="white">Hindi</Typography>
    </Box>
    <Box
      sx={{
        boxShadow: 2,
        cursor: "pointer",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://e1.pxfuel.com/desktop-wallpaper/533/240/desktop-wallpaper-english-words-vocabulary.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      borderRadius={5}
      padding={8}
      onClick={() => {
        alert("Clicked!");
      }}
    >
      <Typography color="white">English</Typography>
    </Box>
  </Stack>
</Box>

    </Stack>

    <ChatPage isChatOpen={isChatOpen} handleCloseChat={handleCloseChat} />

  </>
  );
}
