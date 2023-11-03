import { Box } from '@mui/material'
import React from 'react'
import { themedata } from '@/data/themedata'; 
import Title from './components/title'
import Input from './components/textfield'
import BtSubmit from './components/SubmitButton'

function Index() { 
  return (
    <>
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
          <Title/>
          <Input/>
          <BtSubmit/>
        </Box>
      </Box>
    </>
  )
}
export default Index;
