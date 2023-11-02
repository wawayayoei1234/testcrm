import React, { useEffect } from 'react';
import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logocmpany from 'data/images/ICON LOGO ChicMSP 13.9 2.png';
import logofron from 'data/images/img_v2_fron.png';
import chat from 'data/images/Chat Bubble.png';
import Handlelogout from '@/hook/signoutnavbar/handlelogout';
import HandleClick from '@/hook/signoutnavbar/handleClick';
import { MyContext } from '@/context';
import HandleClose from '@/hook/signoutnavbar/handleClose';
import Usef from  '@/services/useefnav'

export default function ButtonAppBar() {
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = HandleClick();
  const handleClose = HandleClose();
  const handleLogout = Handlelogout();
  return (
    <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}><Usef/>
        <Box  ml={2} sx={{display:'flex' ,alignItems:'center'}}>
          <Box><Image alt="Iconview" src={logocmpany} width={55} height={'auto'} /></Box>
          <Box><Image alt="Iconview" src={logofron} width={55} height={'auto'} /></Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Image alt="Iconview" src={chat} width={40} />
        <Button color="inherit" onClick={handleClick}><AccountCircleIcon style={{fontSize:'40'}} /></Button>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={{fontSize:'45'}} />
        </IconButton>
        <Menu anchorEl={state.anchorEl} open={Boolean(state.anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        </Box>
    </Box>
  );
}
