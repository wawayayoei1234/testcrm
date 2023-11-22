import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Body from './components/pc';
import Mobile from './components/mobile';
import Layout from '../../components/layout';
import { themedata } from '/data/themedata';
import Title from '@/components/title';

function Index() {
    const isMdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <Box sx={{background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,
                display: "flex", justifyContent: "center",alignItems: "center",height: "100vh"}}>
                    <Title namepage="welcome" company="Partne ChicCRM"/>
            <Layout containerheight="auto"  templaterow="0fr auto 0fr"  templateareas="'nav' 'content1' 'footer'" 
                mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'" Content1={isMdUp ? <Box><Body/></Box> : <Box><Mobile/></Box>}/>
        </Box>
    );
}
export default Index;
