import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Link from 'next/link';
import attenden from 'data/images/7125203 1.png';
import note from 'data/images/6306500 1.png';
import pust from 'data/images/Group.png';
import carenda from 'data/images/6307184 1.png';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 

export default function () {
  return (
    <Box sx={{display:{xs:"none",md:'flex'},flexDirection:'column'}} >
        <Box sx={{display:'flex',justifyContent:'center'}}>
              <Box p={1} pt={5}>
                  <Box p={3} sx={{width: 260, height: 250, background: `${themedata[0].eleven}`, borderRadius:5,"&:hover": {
              borderColor: 'สีขอบเมื่อชี้เมาส์',}}} >
                  <Box sx={{ color: `${themedata[0].ten}`, fontSize: 14, fontFamily: frontdata[0].font, fontWeight: '40', }}>Clock-in / Clock-out</Box>
                  <Box sx={{ color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '40', }}>Attendance</Box>
                  <Box pl={2} sx={{cursor: "pointer",transition: "transform 0.1s","&:hover": {transform: "translateY(-5px) "}}}>
                    <Image alt="Iconview" src={attenden} width={238} height={'auto'}></Image></Box></Box>
              </Box >
              <Box p={1} pt={5}>
                  <Box p={3} sx={{width: 260, height: 250,background: `${themedata[0].nine}`, borderRadius: 5,"&:hover": {
              borderColor: 'สีขอบเมื่อชี้เมาส์',}}} >
                  <Box sx={{ color: `${themedata[0].ten}`, fontSize: 14, fontFamily: frontdata[0].font, fontWeight: '40', }}>Description</Box>
                  <Box sx={{ color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '40', }}>Notes</Box>
                  <Box pl={6} sx={{cursor: "pointer",transition: "transform 0.1s","&:hover": {transform: "translateY(-5px) "}}}>
                    <Image alt="Iconview" src={note} width={230} height={'auto'}></Image>
                    </Box>
                  </Box>
              </Box>
              <Box p={1} pt={5}>
              <Box p={3} sx={{width: 260, height: 250, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5,}}>
                <Box sx={{ color: `${themedata[0].ten}`, fontSize: 14, fontFamily: frontdata[0].font, fontWeight: '40' }}>Description</Box>
                <Box sx={{ color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '40' }}>Company</Box>
                <Box p={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Link  href="/entercompany" >
                <Button sx={{cursor:"pointer", transition:"transform 0.2s","&:hover":{transform:"scale(1.3)"}}}>
                  <Image alt="Iconview" src={pust} width={100} height={'auto'} />
                </Button>
                </Link>
                </Box>
              </Box>
            </Box>  
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',}}>
          <Box p={1}>
        <Box p={3} sx={{width: 380, height: 370,background: `${themedata[0].nine}`, borderRadius: 5}} >
        <Box style={{width: '100%', color: `${themedata[0].ten}`, fontSize: 14, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>October 2023</Box>
        <Box style={{color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '350', wordWrap: 'break-word'}}>Calendar & Activity</Box>
        <Box style={{width: '100%', height: '140px', position: 'relative', background: 'white', borderRadius: 20, overflow: 'hidden', border: `${themedata[0].seven}`}}>
        <Box style={{width: 12, height: 180, left: 0, top: 0, position: 'absolute', background: `${themedata[0].six}`}} />
        <Box style={{left: 50, top: 29, position: 'absolute', color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '350', wordWrap: 'break-word'}}>Activity 1</Box>
        <Box style={{width: 450, left: 50, top: 85, position: 'absolute', color: `${themedata[0].eight}`, fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '300', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Quam id vehicula<br></br> dictum donec tincidunt.</Box>
        </Box>
        <br></br>
        <Box style={{width: '100%', height: '140px', position: 'relative', background: 'white', borderRadius: 20, overflow: 'hidden', border: `${themedata[0].seven}`}}>
        <Box style={{width: 12, height: 180, left: 0, top: 0, position: 'absolute', background: `${themedata[0].six}`}} />
        <Box style={{left: 50, top: 29, position: 'absolute', color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '350', wordWrap: 'break-word'}}>Activity 2</Box>
        <Box style={{width: 400, left: 50, top: 85, position: 'absolute', color: `${themedata[0].eight}`, fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '300', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Quam id vehicula<br></br> dictum donec tincidunt.</Box>
        <Box sx={{position: 'absolute', top: 777 , left: 427 , margin: 'auto', zIndex: 1}} >
          <Image alt="Iconview" src={carenda} width={200} height={'auto'} />
        </Box>
      </Box> 
          </Box>
          </Box>
          <Box p={1}>
          <Box p={1} sx={{width: 510, height: 400, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ transform: 'scale(1.)' }} />
          </LocalizationProvider>
          </Box>
          </Box>
        </Box>
    </Box>
  );
}