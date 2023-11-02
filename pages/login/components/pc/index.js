import { Box, Button, Checkbox, FormControlLabel, TextField ,InputAdornment} from '@mui/material'
import { themedata } from '@/data/themedata';
import React, { useEffect, useState } from 'react';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import Image from 'next/image';
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import Loading from '@/components/loading'
import useHandleClick from '@/hook/login';
import { buttontext } from '@/data/buttondata';
import { LoginText } from '@/data/metadata';
function index() {
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = useHandleClick();

  return (
    <>
    <Box sx={{display:{xs:'none',md:'flex'},height:"100vh",width:'100%'}}>  
      <Box p={5} pl={10} pr={10} pt={8} pb={5} sx={{display:'flex',flexDirection:'column', background: 'white',width:'auto',height:'auto',
      borderRadius: "15px",justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
        <Box>
        <Box sx={{ color: '#171717', fontSize: 20, fontFamily: frontdata[0].font, fontWeight: 700}}>{LoginText[0].title}</Box> 
        <Box pb={5} pt={2} sx={{color: `${themedata[0].four}`, fontSize: 14, fontFamily: frontdata[0].font, textAlign: 'left'}}>Welcome to ChicCRM Please login your<br/>account.</Box>
        <Box pb={1}> 
         <TextField onChange={(e)=>{setstate((prevData) => ({ ...prevData, username:  e.target.value}))}} id="EmailInput" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
        </Box>
        <Box>
          <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, password:  e.target.value}))}}  id="PasswordInput" label="Password" placeholder="6+ strong character" size='small' style={{ width: '300px', height: '60px' }}focused color='primary' 
           InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showPassword: !state.showPassword }));}} alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
        </Box>
        </Box>
        <Box>
        <FormControlLabel  control={<Checkbox onClick={()=>{setstate((prevData) => ({ ...prevData, remember: !state.remember }));}}/>}label="Remember for 30 day"sx={{'& .MuiSvgIcon-root': 
        { fontSize: 20 },' & .MuiTypography-root': { fontSize: 13, fontFamily: frontdata[0].font } }}/>
        <Button variant="text"sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font,fontSize: 13
        ,}} >Forgot password</Button>
        </Box>
        <Button variant='contained' onClick={handleClick} style={{ fontSize: '12px', padding: '6px 12px',
          backgroundColor:`${themedata[0].primary}`,width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>{state.loading?<Loading/>:buttontext[0].text}</Button>
        <Box p={2}>
        <label style={{color:`${themedata[0].four}`,fontSize: 15, fontFamily: frontdata[0].font}}>Don't have an account?</label>
        <Button variant="text" sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font}} >Sign up</Button>
        </Box>
     </Box>
    </Box>
    </>
  )
}
export default index