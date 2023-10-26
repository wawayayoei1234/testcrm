import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 
function Index() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleClick = () => {
    setClicked(prevState => !prevState);
  };
  const handleClick2 = () => {
    setClicked2(prevState => !prevState);
  };
  return (
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'60%',height:'auto',
        borderRadius: 5,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word'}}>Company Selection</Box>
          <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/> And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <Button sx={{ width: "40%", height: 'auto', background:clicked2 ? `${themedata[0].secondary}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1,mr:2 }}onClick={handleClick2}>
          <Box >
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '800',  }}>Yes! </span>
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',fontSize:'10px' }}>
          I'm working at one of these companies<br/> Please state which company you work for.
        </span>
        </Box>
        </Button>
        
        <Button  sx={{ width: "40%", height: 'auto', background:clicked ? `${themedata[0].secondary}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1, }}onClick={handleClick}>
        <Box sx={{textAlign:'left'}}>
          <span  style={{  color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '900'}}>No! </span>
          <span  style={{ color:  `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',  fontSize:'10px' }}> 
          I'm not working at any companies listed.On the next page, you'll need to fill in a newaccount registration form.</span>
        </Box>
        </Button>
        </Box>
        <Box p={5}>
        <Link href="/registration" >
          <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].three}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>Next
          </Button> 
          </Link>      
        </Box>
        </Box>
      </Box>  
  )
}
export default Index;
