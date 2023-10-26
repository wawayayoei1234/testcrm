import { Box, Button} from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import logocmpany from '../../../../data/images/img_v2_54c80a1a-4593-400d-bf42-ab1f26031f1h 2.png'
import jook from '../../../../data/images/jookking.png'
import gg from '../../../../data/images/logogoogle.png'
import fb from '../../../../data/images/logofacebook.png'
import az from '../../../../data/images/logoAzure.png'
import Link from 'next/link';

function index() {
  return (
    <Box   sx={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh" }}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',width:'auto',
        borderRadius: 10,justifyContent:'center',alignItems:'center',}}> 
        <Box sx={{ textAlign: 'center' }}>
        <span style={{ color: 'black', fontSize: 30, fontFamily: 'Avenir', fontWeight: 500, wordWrap: 'break-word' }}>Welcome to </span>
        <span style={{ color: '#52752F', fontSize: 30, fontFamily: 'Avenir', fontWeight: 1000, wordWrap: 'break-word' }}>ChicCRM</span>
    </Box>
          <Box pt={3} ><Image alt="Iconview" src={logocmpany} width={100} height={'auto'}></Image></Box>
          <Button  ><Image alt="Iconview" src={jook} width={300} height={'auto'}></Image></Button>
          <Box sx={{display:'flex'}}>
          <Button LinkComponent={Link} href='/profile'  sx={{ width: 50, height: 30, background: 'white', border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image  alt="Iconview" src={gg} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Button>
          <Button sx={{width: 50, height: 30, background: 'white',  border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={fb} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Button>
          <Button sx={{width: 50, height: 30, background: 'white',  border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={az} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Button>
        </Box>
      </Box> 
      </Box> 
  )
}
export default index