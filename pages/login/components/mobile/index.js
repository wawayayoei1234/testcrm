import { Box, Button, Checkbox, FormControlLabel, TextField ,InputAdornment} from '@mui/material'
import { themedata } from '../../../../data/themedata';
import React, { useEffect, useState } from 'react';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import Image from 'next/image';
import { frontdata } from '../../../../data/frontdata'; 
import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import Loading from '@/components/loading'
import useHandleClick from '@/hook/login';

function index() {
  const [state, setstate] = React.useContext(MyContext);
  const router = useRouter();
  const handleClick = useHandleClick();

  return (
    <>
       <Box sx={{display:{xs:'flex',md:'none'},height:"100vh",width:'100%'}}> 
       <Box p={4} sx={{display:'flex',flexDirection:'column', background: 'white',width:'auto',height:'auto',borderRadius: "15px",justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
        
        {/* //*title */}
        <Box>
        <Box pt={2} sx={{ color: '#171717', fontSize: 16, fontFamily: frontdata[0].font, fontWeight: '800'}}>Login</Box> 
        <Box pb={3} pt={2} sx={{color: `${themedata[0].four}`, fontSize: "13px", fontFamily: frontdata[0].font, textAlign: 'left'}}>Welcome to ChicCRM Please login your<br/>account.</Box>
          <Box pb={1}><TextField onChange={(e)=>{setstate((prevData) => ({ ...prevData, username:  e.target.value}))}}  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/></Box>
          <Box><TextField type={state.showPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, password:  e.target.value}))}}  id="Password" label="Password" placeholder="6+ strong character" size='small' style={{ width: '300px', height: '60px' }}focused color='primary' 
             InputProps={{
             endAdornment: (
             <InputAdornment position="end">
               <Image onClick={()=>{setstate((prevData) => ({ ...prevData, showPassword: !state.showPassword }));}}  alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'}></Image>
             </InputAdornment>)}}/>
          </Box>
        </Box>
        {/* //*title */}

        {/* //!remember and forgot */}
        <Box width="100%" display="flex" justifyContent="space-between">
          <FormControlLabel control={<Checkbox onClick={()=>{setstate((prevData) => ({ ...prevData, remember: !state.remember }));}}/>}
          label="Remember for 30 day"sx={{'& .MuiSvgIcon-root': { fontSize: 16 },' & .MuiTypography-root': { fontSize: "12px", fontFamily: frontdata[0].font } }}/>
          <Button variant="text"sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font,fontSize: "12px",}} >Forgot password</Button>
        </Box>
        {/* //!remember and forgot */}

        {/* //?button */}
        <Button variant='contained' onClick={handleClick} style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>{state.loading?<Loading/>:"Next"}</Button>
        <Box p={1}>
        <label style={{color:`${themedata[0].four}`,fontSize: "13px", fontFamily: frontdata[0].font}}>Don't have an account?</label>
        <Button variant="text" sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font}} >Sign up</Button>
        </Box>
        {/* //?button */}
      </Box>
      </Box> 
    </>
  )
}
export default index