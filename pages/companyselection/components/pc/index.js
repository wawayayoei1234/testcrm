import { Box, Button, Collapse, Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext, useState } from 'react'
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { useRouter } from 'next/router'; 

function Index() {
  const [checked, setChecked] = useState(false)
  const [state, setState] = useContext(MyContext);
  const handleCompanyChange = (event) => { 
  const { value } = event.target; 
  setState(predata => ({ ...predata, selectedCompany: value }));
};
const handleClick = () => {
  setState(predata => ({ ...predata, Mycompany: !predata.Mycompany })); 
  if(state.Nocompany === true){
    setState(predata => ({ ...predata, Nocompany: false }))
  }
  setChecked(prevState => !prevState);
  setState(predata => ({ ...predata, selectedCompany: undefined, })); 
};
const handleClick2 = () => {
  setState(predata => ({ ...predata, Nocompany: !predata.Nocompany }));
  if(state.Mycompany === true){
    setState(predata => ({ ...predata, Mycompany: false }))
  }
  setChecked(false);
  setState(predata => ({ ...predata, selectedCompany: undefined })); 
};
const router = useRouter();
const clickTo = () => {
  if (state.Nocompany === true) {
    setState((predata) => ({ ...predata, validate: [] }));
    setState((predata) => ({ ...predata, validate: { ...predata.validate, match: false } }));
      router.push('/registration');
  } else {
    router.push('/registration');
  }
};
  return (
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'60%',height:'auto',
        borderRadius: 5,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word'}}>Company Selection</Box>
          <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/> And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <Button sx={{ width: "300px", height: 'auto', background:state.Mycompany ? `${themedata[0].btcompany}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1,mr:2 }}onClick={handleClick}>
          <Box>
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '800',  }}>Yes! </span>
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',fontSize:'10px' }}>
            I'm working at one of these companies<br/> Please state which company you work for.
        </span>
        </Box>
        </Button>
        <Button  sx={{ width: "300px", height: 'auto', background:state.Nocompany ? `${themedata[0].btcompany}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1, }}onClick={handleClick2}>
        <Box sx={{textAlign:'left'}}>
          <span  style={{  color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '900'}}>No! </span>
          <span  style={{ color:  `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',  fontSize:'10px' }}> 
            I'm not working at any companies listed.On the next page, you'll need to fill in a newaccount registration form.</span>
        </Box>
        </Button>
        </Box>
        <Collapse in={checked}  sx={{ marginLeft: '-315px' }}>
          <Box p={1} sx={{display: 'flex',justifyContent: 'center',alignItems:'center',flexDirection:'column'}}>
            <Box p={1}  sx={{width:"300px" , height: "100%" , background: 'white',borderRadius: '5px',border: `1px ${themedata[0].secondary} solid`}}>
              <RadioGroup value={state.selectedCompany} onChange={handleCompanyChange}>
                <FormControlLabel value="recovery"control={<Radio size="small" />}label={<Box p={2} sx={{fontSize:'13px'}}>
                  {state.validate.corporate_name_en}, {state.validate.local_address_zipcode} {state.validate.country_name}
                  </Box>}/>
                <Divider />
                <FormControlLabel value="company1"control={<Radio size="small" />}label={<Box p={2} sx={{fontSize:'13px'}}>Company1</Box>}/>
              </RadioGroup>
            </Box>
          </Box>
        </Collapse>
        <Box p={5} >
          <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`}}
          disabled={state.Nocompany === false && state.selectedCompany === undefined} onClick={clickTo}>Next
          </Button> 
        </Box>
        </Box>
      </Box>  
  )
}
export default Index;