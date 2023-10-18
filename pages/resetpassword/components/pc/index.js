import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

function Index() {
  const [otp, setOtp] = useState('');
  return (
  
      <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Reset Password</Box>
          <Box pb={7} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>Please type something you'll remember</Box>
          <TextField  id="Email" label="New password"placeholder="password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>
          <TextField  id="Email" label="Confirm new password"placeholder="repeat password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>       
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:'#84BAA1',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Reset Password</Button>
        </Box>
      </Box>  
  
  )
}

export default Index;
