import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 
import { useRouter } from 'next/router';
import { MyContext } from '@/context';
function Index() {
  const [state, setstate] = React.useContext(MyContext);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  return (
   <>
          <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={5} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word',}}>Email Verification</Box>
          <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', 
          textAlign: 'left'}}>We have sent code to your Email <strong>{state.decode_token.email}</strong></Box>
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
          <Link href="/resetpassword" >
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`}}>Next</Button>
          </Link>
          <Box pt={2}>
            <span style={{color:`${themedata[0].four}`,fontSize: 15, fontFamily: frontdata[0].font}}>Didn’t receive code?</span>
            <Button variant="text" sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font}} >
                Sign up</Button>
          </Box> 
        </Box>
      </Box> 
      </>

  )
}

export default Index;
