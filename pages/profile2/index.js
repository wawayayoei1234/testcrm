import React from 'react'
import { Box } from '@mui/material';
import Body from './components/pc'
import Mobile from './components/mobile'
import Layout from  '../../components/layout'
import Navbar from './components/navbar'
import Conten from './components/conten2'


function Index() {
  return (
    <Box>
      <Box sx={{display: "flex",justifyContent: "center",alignItems: "center"}}> 
    <Box sx={{display:{xs:'none',md:'flex'}}}>  
    
      <Layout containerheight="auto" templaterow="0fr auto auto 0fr" templateareas="'nav' 'content1' 'content2' 'footer'" 
      mtemplaterow="0fr auto auto 0fr" mtemplateareas="'nav' 'content1' 'content2' 'footer'"
      nav={<Box><Navbar/></Box>}
      Content2={<Box><Body/></Box>}
      Content1={<Box><Conten/></Box>}
      />
    </Box>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}> 
    <Box sx={{display:{xs:'flex',md:'none'}}}>
      <Layout containerheight="auto" templaterow="0fr auto auto " templateareas="'nav' 'content1' 'content2' " 
      mtemplaterow="0fr auto auto" mtemplateareas="'nav' 'content1' 'content2' "
      nav={<Box><Navbar/></Box>}
      Content2={<Box><Mobile/></Box>}
      Content1={<Box><Conten/></Box>}
        />
    </Box>
    </Box>
    </Box>
  )
}

export default Index