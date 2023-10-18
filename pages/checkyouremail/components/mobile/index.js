import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import logocmpany from '../../../../data/images/3675555 1.png'

function Index() {
  const [otp, setOtp] = useState('');
  return (
      <Box sx={{background:"linear-gradient(110deg, #84BAA1, #FFFBE2 100%)",height:"100vh",width:'100%'}}>
        <Box p={4} sx={{display:'flex',flexDirection:'column', background: 'white',
      borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Check your Email</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0',textAlign:'center' 
          }}>We have sent password to your Email<br></br> 
          ex**e@tracmail.com</Box>
          <Box pb={3} ><Image alt="Iconview" src={logocmpany} width={200} height={'auto'}></Image></Box>       
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:'#84BAA1',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next</Button>
        <Box p={2}>
      <label style={{color:'#7F8391',fontSize: 15, fontFamily: 'Avenir'}}>Didn’t receive password?</label>
      <Button variant="text" sx={{color:'#48846B',textTransform:'capitalize', fontFamily: 'Avenir'}} >Resend</Button>
      </Box>
        </Box>
      </Box>  
  )
}

export default Index;
