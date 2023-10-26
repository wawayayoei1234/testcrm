import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { themedata } from '../../../../data/themedata'; 

function Index() {
  const [otp, setOtp] = useState('');
  return (
  
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Reset Password</Box>
          <Box pb={7} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>Please type something you'll remember</Box>
          <TextField  id="Email" label="New password"placeholder="password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>
          <TextField  id="Email" label="Confirm new password"placeholder="repeat password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>       
          <Link href="/profile2" >
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:`${themedata[0].three}` }}>Reset Password</Button>
          </Link>
        </Box>
      </Box>  
  
  )
}

export default Index;
