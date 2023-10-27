import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import Link from 'next/link';
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 
import {MyContext} from '../../../../context'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index() {
  const [state, setstate] = React.useContext(MyContext);
  console.log(state)
  const [amphures, setamphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [zipcodes, setzipcodes] = useState([]);
  const [data, setData] = useState({provinces: '',amphures: '',tambons: '',zipcodes: ''})


const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setData(prevState => ({ ...prevState, provinces: selectedProvince }));

    fetch(`http://192.168.5.43:8005/amphures/${selectedProvince}`)
        .then(response => response.json())
        .then(result => setamphures(result))
        .catch(error => console.log('error', error));
};
const handleAmphureChange = (e) => {
  const selectedAmphure = e.target.value;
  setData(prevState => ({ ...prevState, amphures: selectedAmphure }));

  fetch(`http://192.168.5.43:8005/tambons/${selectedAmphure}`,)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        setTambons(result);
    })
    .catch(error => console.log('error', error));
};
const handleTambonChange = (e) => {
    const selectedTambon = e.target.value;
    setData(prevState => ({ ...prevState, tambons: selectedTambon }));

    fetch(`http://192.168.5.43:8005/zipcodes/${selectedTambon}`,)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setzipcodes(result);
        })
        .catch(error => console.log('error', error));
}
  
  return (
    <Box  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,width:'100%',height:"130vh"}}>
      <Box pt={3} sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={1} sx={{ flexDirection:'column', background: 'white', width: '80%', height: '750px', borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={3}>
            <Box  sx={{ color: `${themedata[0].four}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].four}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
            <TextField  id="Email" label="First Name"placeholder="Enter Your First Name" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Job Title"placeholder="Enter Your Job Title" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Email"placeholder="example@thac.com" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid  xs={4}>
            <TextField  id="Email" label="Last Name"placeholder="Enter Your Last Name" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid  xs={4}>
            <TextField  id="Email" label="Mobile Number"placeholder="Enter Your Mobile Number" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
          </Grid>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
            <TextField  id="Email" label="Company Name"placeholder="Enter Company Name" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Country"placeholder="- Select Country -" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Postal / ZIP Code" value={zipcodes} placeholder="Enter Postal / Code" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid  xs={4}pb={2}>
            <TextField  id="Email" label="Branch"placeholder="Branch" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid  xs={4}>
            <FormControl >
            <InputLabel >State / Provice</InputLabel>
            <Select label="provinces" style={{ width: '300px', height: '40px' }} size='small' value={data.provinces || '- Select State/Provice -'} onChange={handleProvinceChange} focused color='primary' >
            <MenuItem  value="- Select State/Provice -" >- Select State/Provice -</MenuItem>
              {state.provinces.map((province,index) => (
                <MenuItem key={`${index}`} value={province.id}>
                  {province.name_th}
                </MenuItem>))}
          </Select>
          </FormControl>
            </Grid> 
            <Grid xs={4} pb={2}>
            <TextField  id="Email" label="Website"placeholder="www.thacthai.com" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4} pb={2}>
            <TextField  id="Email" label="Address"placeholder="Street, Apt" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <FormControl >
            <InputLabel >District</InputLabel>
            <Select label="amphures"   size='small' style={{ width: '300px', height: '40px' }} value={data.amphures || 'Enter City'} onChange={handleAmphureChange}>
            <MenuItem value="Enter City"> Enter City </MenuItem>
              {amphures.map((amphure,index) => (
                  <MenuItem key={`${index}`} value={amphure.id}>
                      {amphure.name}
                  </MenuItem>))}
          </Select>
          </FormControl> </Grid>
            <Grid  xs={4}></Grid>      
            <Grid  xs={4}>
            <TextField  id="Email" label="Address 2"placeholder="Office, Room/Flat" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid  xs={4}>
            <FormControl >
            <InputLabel >Sub-District</InputLabel>
            <Select label="tambons" style={{ width: '300px', height: '40px' }} size='small' value={data.tambons || 'Enter District'} onChange={handleTambonChange}>
            <MenuItem value="Enter District"> Enter District </MenuItem>
            {tambons.map((tambon,index) => (
                      <MenuItem key={`${index}`} value={tambon.id}>
                    {tambon.name}
                  </MenuItem>))}
          </Select>
          </FormControl></Grid> 
          </Grid>
          </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mb:3}}>
        <Button variant="contained" onClick={()=>{setstate((prevData) => ({ ...prevData, open:  true}))}}  sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
          <Dialog fullScreen onClose={()=>{setstate((prevData) => ({ ...prevData, open:  false}))}} TransitionComponent={Transition}>
            <Box p={2}>
                   <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={2}/>
          <Divider/>
          <Box p={3} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid  xs={4}pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}></Grid>      
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControlLabel control={<Checkbox />} label="Confirm information is correct" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="outlined" onClick={()=>{setstate((prevData) => ({ ...prevData, open:  false}))}} sx={{width:'30%'}}>Back</Button>
              <Box p={1}/>
              <Button LinkComponent={Link} href='/checkyouremail' variant="contained"sx={{width:'30%'}} >Confirm</Button>
            </Box>
          </Box>
            </Dialog>
              </Box>
            </Box>
          </Box>
          </Box> 
        </Box>
  )
}
export default index
