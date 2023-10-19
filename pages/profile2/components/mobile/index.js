import * as React from 'react';;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import attenden from '../../../../data/images/7125203 1.png'
import note  from '../../../../data/images/6306500 1.png'
import pust  from '../../../../data/images/Group.png'
import carenda  from '../../../../data/images/6307184 1.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function () {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Box pt={3}>
                  <Box p={3} sx={{width: 260, height: 250, background: '#9CD6B3', borderRadius:5}} >
                  <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40', }}>Clock-in / Clock-out</Box>
                  <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40', }}>Attendance</Box>
                  <Box pl={3}><Image alt="Iconview" src={attenden} width={238} height={'auto'}></Image></Box></Box>
              </Box >
              <Box pt={3} >
                  <Box p={3} sx={{width: 260, height: 250,background: '#97BDFE', borderRadius: 5,}} >
                  <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40', }}>Description</Box>
                  <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40', }}>Notes</Box>
                  <Box pl={5} >
                    <Image alt="Iconview" src={note} width={230} height={'auto'}></Image>
                    </Box>
                  </Box>
              </Box>
              <Box pt={3} >
              <Box p={3} sx={{width: 260, height: 250, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5,}}>
                <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40' }}>Description</Box>
                <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40' }}>Company</Box>
                <Box p={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box>
                  <Image alt="Iconview" src={pust} width={100} height={'auto'} />
                </Box>
                </Box>
              </Box>
            </Box>  
        <Box >
          <Box pt={3}>
        <Box p={3} sx={{width: 260, height: 250,background: '#97BDFE', borderRadius: 5}} >
        <div style={{width: '100%', color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>October 2023</div>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '350', wordWrap: 'break-word'}}>Calendar & Activity</div>
         
          </Box>
          </Box>
          <Box pt={3}>
          <Box  sx={{width: 310, height: 320, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar  />
          </LocalizationProvider>
          </Box>
          </Box>
        </Box>
    </Box>
  );
}