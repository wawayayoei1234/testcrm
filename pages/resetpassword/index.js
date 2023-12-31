import React from 'react'
import { Box } from '@mui/material';
import Body from './components/pc'
import Mobile from './components/mobile'
import Layout from  '../../components/layout'
import { themedata } from '../../data/themedata'; 

function Index() {
  return (
    <Box sx={{background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,display: "flex",justifyContent: "center",alignItems: "center",height: "100vh"}}>
    <Box sx={{display:{xs:'none',md:'flex'}}}>   
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      Content1={<Box><Body/></Box>}/>
    </Box>
    <Box sx={{display:{xs:'flex',md:'none'}}}>
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
        Content1={<Box><Mobile/></Box>}/>
    </Box>
    </Box>
  )
}

export default Index