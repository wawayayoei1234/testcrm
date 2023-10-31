import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { themedata } from '../../../../data/themedata'; 
import { frontdata } from '../../../../data/frontdata'; 
import { useRouter } from 'next/router';
import { MyContext } from '@/context';

function Index() {
  const [state, setstate] = React.useContext(MyContext);
  console.log("🚀 ~ file: index.js:11 ~ Index ~ state:", state)
  const router = useRouter();

  useEffect(() => {
    if (state.access_token.length !== undefined) {
      router.push('/login');
    }
  }, [state.access_token]); 
  return (
    <>
      {state.access_token.length===undefined? 
      <>
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word',}}>Reset Password</Box>
          <Box pb={7} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', 
          textAlign: 'left'}}>Please type something you'll remember</Box>
          <TextField onChange={(e)=>{setstate((prevData) => ({ ...prevData, oldpassword:  e.target.value}))}}  id="Old password" label="Old password"placeholder="old password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>
          <TextField onChange={(e)=>{setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}  id="New password" label="New password"placeholder="new password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>
          <TextField onChange={(e)=>{setstate((prevData) => ({ ...prevData, confirmpassword:  e.target.value}))}} id="Confirm new password" label="Confirm new password"placeholder="repeat password" size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'/>       
          <Button onClick={()=>{setstate((prevData) => ({ ...prevData, btchangepass:  true,loading:true }))}}  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>Reset Password</Button>
        </Box>
      </Box>  
      </>
      :""
    }
    </>
  )
}
export default Index;
