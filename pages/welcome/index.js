import React from 'react'
import { Box,useMediaQuery } from '@mui/material';
import Body from './components/pc'
import Mobile from './components/mobile'
import Layout from  '../../components/layout'
import { themedata} from '/data/themedata';
function Index() {
  const matches = useMediaQuery('(min-width:960px)') 
  return (
    <Box sx={{background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,display: "flex",justifyContent: "center",alignItems: "center",height: "100vh"}}>
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      Content1={matches? <Box><Body/></Box> : <Box><Mobile/></Box> } />
    </Box>
  )
}

export default Index