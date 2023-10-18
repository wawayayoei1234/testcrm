import { Box, Button, Checkbox, FormControlLabel, TextField ,InputAdornment} from '@mui/material'

import React, { useState } from 'react';
import Iconview from '../../../../data/images/Hide.png'
import Image from 'next/image';

function index() {
  const [data, setdata] = useState({username:'',password:''})
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    togglePassword();
  }
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "username": data.username,
    "password": data.password
  })
  const login=()=>{
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }
  fetch("http://192.168.5.71:8080/api/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
  return (
    <>
    <Box sx={{display:{xs:'flex',md:'none'}}}>
    <Box sx={{background:"linear-gradient(#84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>  
      <Box p={5} sx={{display:'flex',flexDirection:'column', background: 'white',width:'70%',height:'auto',
      borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
        <Box>
        <Box sx={{ color: '#171717', fontSize: 20, fontFamily: 'Avenir', fontWeight: '800'}}>Login</Box> 
        <Box pb={3} sx={{color: '#7F8391', fontSize: 14, fontFamily: 'Avenir', textAlign: 'left'}}>Welcome to ChicCRM Please login your<br/>account.</Box>
            <Box pb={1}> <TextField  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/></Box>
            <Box> <TextField  id="Password" label="Password" placeholder="6+ strong character" size='small' style={{ width: '300px', height: '60px' }}focused color='primary' 
            InputProps={{ 
              endAdornment: (
              <InputAdornment position="end">
                <Button onClick={handleClick} ><Image alt="Iconview" src={Iconview} width={20} height={'30px'}></Image></Button>
              </InputAdornment>)}}/></Box>
             </Box> 
            <Box  >
            <FormControlLabel  control={<Checkbox/>}label="Remember for 30 day"sx={{'& .MuiSvgIcon-root': 
            { fontSize: 20 },' & .MuiTypography-root': { fontSize: 13, fontFamily: 'Avenir' } }}/>
            <Button variant="text"sx={{color:'#48846B',textTransform:'capitalize', fontFamily: 'Avenir',fontSize: 13
            ,}} >Forgot password</Button>
          </Box>
        <Button variant='contained' onClick={login} style={{ fontSize: '12px', padding: '6px 12px',
        backgroundColor:'#84BAA1',width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next</Button>
      <Box p={2}>
      <label style={{color:'#7F8391',fontSize: 15, fontFamily: 'Avenir'}}>Don't have an account?</label>
      <Button variant="text" sx={{color:'#48846B',textTransform:'capitalize', fontFamily: 'Avenir'}} >Sign up</Button>
      </Box>
     </Box>
    </Box>
    </Box>
    </>
  )
}
export default index