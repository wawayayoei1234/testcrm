import { Box } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { themedata } from '../../../../data/themedata';

function index() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Box sx={{ justifyContent:'space-between', display: 'flex', alignItems: 'baseline',flexDirection:'column'}}>
              <Box sx={{color: `${themedata[0].ten}`, fontSize: 18, fontFamily: 'Avenir', fontWeight: '350'}}>Oct, 9</Box>
              <Box sx={{color: `${themedata[0].ten}`, fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', display: 'flex', alignItems: 'center'}}>Hi, Name</Box>
              
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <Box sx={{ position: 'relative', width: 90, height: 90, background: `${themedata[0].twelve}`, borderRadius: 9999 }}>
          <Box sx={{ position: 'absolute', top: 70, left: 70, width: 20, height: 20, background: `${themedata[0].six}`, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EditIcon fontSize='10' color='three'/>
          </Box>
          </Box>
          </Box>
        </Box>
  )
}

export default index