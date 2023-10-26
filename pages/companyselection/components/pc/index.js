import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

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
      <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'60%',height:'auto',
        borderRadius: 5,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 20, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word'}}>Company Selection</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 13, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/> And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <Button sx={{ width: "40%", height: 'auto', background:clicked2 ? '#48846B' : 'white', borderRadius: 1, border: '1px #48846B solid',p:1,mr:2 }}onClick={handleClick2}>
          <Box >
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '800',  }}>Yes! </span>
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '350',fontSize:'10px' }}>
          I'm working at one of these companies<br/> Please state which company you work for.
        </span>
        </Box>
        </Button>
        
        <Button  sx={{ width: "40%", height: 'auto', background:clicked ? '#48846B' : 'white', borderRadius: 1, border: '1px #48846B solid',p:1, }}onClick={handleClick}>
        <Box sx={{textAlign:'left'}}>
          <span  style={{  color: '#171717', fontFamily: 'Avenir', fontWeight: '900'}}>No! </span>
          <span  style={{ color:  '#171717', fontFamily: 'Avenir', fontWeight: '350',  fontSize:'10px' }}> 
          I'm not working at any companies listed.On the next page, you'll need to fill in a newaccount registration form.</span>
        </Box>
        </Button>
        </Box>
        <Box p={5}>
        <Link href="/registration" >
          <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:'#DAEBE3',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next
          </Button> 
          </Link>      
        </Box>
        </Box>
      </Box>  
  )
}
export default Index;
