import { Box, Button, TextField,InputAdornment, Alert } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import useHandleClick from '@/hook/resetpassword';
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import styled from 'styled-components';
import handlevalidatepassword from '@/hook/validatepassword'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
  },
}));

function Index() { 
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = useHandleClick();
  const updatePassword = handlevalidatepassword();
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
          <LightTooltip  title={
          <Box display="flex" flexDirection="column" sx={{ '& > *:not(:last-child)': { mb: 0.2 } }}>
            <Alert severity={state.passwordStrength!==""? state.passwordStrength === 'Very Weak' ? "error" :state.passwordStrength === 'Weak' ? "warning" :state.passwordStrength === 'Medium' ? "info" :"success":"error"}>
            {state.passwordStrength!==""?`Password Strength: ${state.passwordStrength}`:"Password Strength: -"}
            </Alert>
          <Alert severity={state.minLength ? "success" : "error"}> Password must be at least 8 characters.</Alert>
          <Alert severity={state.hasNumber ? "success" : "error"}> Password must contain a number.</Alert>
          <Alert severity={state.hasUpper ? "success" : "error"}>Password must contain an uppercase letter.</Alert>
          <Alert severity={state.hasLower ? "success" : "error"}>Password must contain a lowercase letter.</Alert>
        </Box>} placement="right-start">
          <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{updatePassword(e.target.value);
           setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}   label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          </LightTooltip>
          <LightTooltip  title={ 
            <Alert severity={state.passwordsMatch ? "success" : "error"}>{state.passwordsMatch ? "Passwords match." : "Passwords do not match."}</Alert>          
            }placement="right-start">
          <TextField type={state.showConPassword ? 'text' : 'password'} onChange={(e)=>{
            const confirmPass = e.target.value;
            setstate((prevData) => ({ ...prevData,passwordsMatch: state.newpassword === confirmPass, confirmpassword:  e.target.value}))}}  label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          </LightTooltip>       
          {/* //*Textfield */}

          {/* //?Button */}
          <Button disabled={!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch} onClick={handleClick}  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',color:`${themedata[0].three}`,
           width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,backgroundColor:!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch?`${themedata[0].four}`:`${themedata[0].primary}` }}>{ResetPassText[0].buttontext}</Button>
          {/* //?Button */}

        </Box>
      </Box>  
    </>
  )
}
export default Index;
