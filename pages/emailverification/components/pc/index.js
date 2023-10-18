import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

function Index() {
  const [otp, setOtp] = useState('');
  return (
   
      <Box sx={{background:"linear-gradient(110deg, #84BAA1, #FFFBE2 100%)",height:"100vh",width:'100%'}}>
        <Box p={5} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 20, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Email Verification</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>We have sent code to your Email ex**e@tracmail.com</Box>
          <Box pb={3} >
          <OtpInput
          className='otp-input-container'
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>&nbsp;&nbsp;</span>}
          renderInput={(props) => <input className="otp-input" {...props} />}
          inputStyle={{ fontSize: '20px', width: '40px', height: '50px', }}
          />
          </Box>
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:'#84BAA1',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next</Button>
          <Box pt={2}>
            <span style={{color:'#7F8391',fontSize: 15, fontFamily: 'Avenir'}}>Didn’t receive code?</span>
            <Button variant="text" sx={{color:'#48846B',textTransform:'capitalize', fontFamily: 'Avenir'}} >
                Sign up</Button>
          </Box> 
        </Box>
      </Box>  

  )
}

export default Index;
