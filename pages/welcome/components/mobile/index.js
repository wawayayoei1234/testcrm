import { Box, Button} from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import logocmpany from 'data/images/img_v2_54c80a1a-4593-400d-bf42-ab1f26031f1h 2.png'
import jook from 'data/images/jookking.png'
import gg from 'data/images/logogoogle.png'
import fb from 'data/images/logofacebook.png'
import az from 'data/images/logoAzure.png'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import HandleSignIn from "@/hook/loginwelcom"

function index() {
  const { data: session } = useSession();
  const handleSignIn= HandleSignIn();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push('/profile');
    }
  }, [session]);
  return (
    <Box   sx={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh" }}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'auto',height:'60%',
        borderRadius: 10,justifyContent:'center',alignItems:'center',}}> 
        <Box sx={{ textAlign: 'center' }}>
        <span style={{ color: 'black', fontSize: 30, fontFamily: frontdata[0].font, fontWeight: 500, wordWrap: 'break-word' }}>Welcome to </span>
        <span style={{ color: `${themedata[0].secondary}` , fontSize: 30, fontFamily: frontdata[0].font, fontWeight: 1000, wordWrap: 'break-word' }}>ChicCRM</span>
    </Box>
          <Box pt={3} ><Image alt="Iconview" src={logocmpany} width={100} height={'auto'}></Image></Box>
          <Box  ><Image alt="Iconview" src={jook} width={300} height={'auto'}></Image></Box>
          <Box sx={{display:'flex'}}>
          <Button onClick={handleSignIn("google")}  sx={{ width: 50, height: 30, background: 'white', border: `1px ${themedata[0].secondary} solid`, display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image  alt="Iconview" src={gg} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Button>
          <Box sx={{width: 50, height: 30, background: 'white',  border: `1px ${themedata[0].secondary} solid`, display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={fb} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Box>
          <Box sx={{width: 50, height: 30, background: 'white',  border: `1px ${themedata[0].secondary} solid`, display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={az} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Box>
        </Box>
      </Box> 
      </Box> 
  )
}
export default index