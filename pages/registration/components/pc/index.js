import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index() {
  const [age, setAge] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box  sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",width:'100%',height:"110vh"}}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={0} sx={{ flexDirection:'column', background: 'white', width: '95%', height: 'auto', borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={3}>
            <Box  sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
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
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
            <TextField  id="Email" label="Company Name"placeholder="Enter Company Name" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Country"placeholder="- Select Country -" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Postal / ZIP Code"placeholder="Enter Postal / Code" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid  xs={4}pb={2}>
            <TextField  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid  xs={4}>
            <TextField  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid xs={4} pb={2}>
            <TextField  id="Email" label="Website"placeholder="www.thacthai.com" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4} pb={2}>
            <TextField  id="Email" label="Address"placeholder="Street, Apt" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}>
            <TextField  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid  xs={4}></Grid>      
            <Grid  xs={4}>
            <TextField  id="Email" label="Address 2"placeholder="Office, Room/Flat" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid  xs={4}>
            <TextField  id="Email" label="Email"placeholder="Enter your email" size='small'  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
          </Grid>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm information is correct" />
          </Box>
          </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mb:3}}>
        <Button variant="contained" onClick={handleClickOpen}  sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={1}>
                   <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
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
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm information is correct" />
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="outlined" sx={{width:'30%'}}>Back</Button>
              <Box p={1}/>
              <Button variant="contained"  sx={{width:'30%'}}>Confirm</Button>
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
