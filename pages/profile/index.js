import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Body from './components/pc';
import Layout from '../../components/layout';
import Navbar from './components/navbar';
import Conten from './components/conten2';
import Mobile from './components/mobile';

function Index() {
  const matches = useMediaQuery('(min-width:960px)') 
  return (
    <Box>
      <Layout containerheight="auto" templaterow="1fr auto auto" templateareas="'nav' 'content1' 'content2'"
        mtemplaterow="0fr auto auto" mtemplateareas="'nav' 'content1' 'content2'"
        nav={<Box><Navbar/></Box>}
        Content1={<Box><Conten/></Box>}
        Content2={matches ? <Box><Body/></Box> : <Box><Mobile/></Box>}
       
      />
    </Box>
  );
}

export default Index;
