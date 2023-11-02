import { Box, Button, TextField,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import useHandleClick from '@/hook/resetpassword';
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'

function Index() { 
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = useHandleClick();
  return ( 
    <>
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
          
          {/* //!Title */}
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',}}>{ResetPassText[0].title}</Box>
          <Box pb={7} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>{ResetPassText[0].description}</Box>
          {/* //!Title */}

          {/* //*Textfield */}
          <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, oldpassword:  e.target.value}))}}  label={ResetPassText[0].InputOldPass} placeholder={ResetPassText[0].InputOldPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showPassword: !state.showPassword }));}} alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}   label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          <TextField type={state.showConPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, confirmpassword:  e.target.value}))}}  label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>       
          {/* //*Textfield */}

          {/* //?Button */}
          <Button onClick={handleClick}  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
           width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>{ResetPassText[0].buttontext}</Button>
          {/* //?Button */}

        </Box>
      </Box>  
    </>
  )
}
export default Index;
