import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 
function Index() {
    const [otp, setOtp] = useState('');
    return (
      <Box sx={{ background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`, height: "100vh", width: '100%' }}>
        <Box p={3} sx={{
          display: 'flex', flexDirection: 'column', background: 'white', width: '70%',
          borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word' }}>Company Selection</Box>
          <Box pb={3} sx={{ color: `${themedata[0].four}`, fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            Please Take A Look At The Companies Listed Below And Tell Us Whether You Are Working At Any Of Them
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'
          }}>
            <Box sx={{ width: "100%", height: 'auto', background: 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`, p: 1 }}>
              <span style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '800' }}>Yes! </span>
              <span style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350', fontSize: '10px' }}>
                I'm working at one of these companies<br /> Please state which company you work for.
              </span>
            </Box>
  
            <Box marginTop={1} sx={{ width: "100%", height: 'auto', background: 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`, p: 1 }}>
              <span style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '900' }}>No! </span>
              <span style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350', fontSize: '10px' }}>
                I'm not working at any companies listed. On the next page, you'll need to fill in a new account registration form.
              </span>
            </Box>
          </Box>
  
          <Box p={5}>
            <Button variant='contained' sx={{
              fontSize: '12px', padding: '6px 12px', backgroundColor: `${themedata[0].three}`,
              width: '300px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}`
            }}>Next</Button>
          </Box>
        </Box>
      </Box>
    )
  }
  export default Index;
  
