import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 

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
    <Box  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,width:'100%',height:"180vh",display: "flex",justifyContent: "center", alignItems: "center"}}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={5} sx={{flexDirection:'column', background: 'white',width:'75%',height:'160vh',borderRadius: 10, }}> 
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>User Registration</Box>
        <Box  sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please fill in the form. All fields marked with (*) shall be required.
        </Box>
        <Box sx={{width: '100%',  border: `1px ${themedata[0].four} solid`}}>  
        </Box>
        <Box>
        <Box sx={{color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>Personal Details</Box>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}} > 
          <Grid item >
            <TextField id="Email1" label="First Name" placeholder="Enter Your First Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email2" label="Last Name" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email3" label="Job Title" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email4" label="Mobile Number" placeholder="Enter Your Mobile Number" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email5" label="Email" placeholder="example@thac.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
     
        <Box style={{ width: '100%', border: `1px ${themedata[0].four} solid` }}></Box>
        <Box>
        <div style={{color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Company Details</div>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}> 
          <Grid item >
            <TextField id="Email1" label="Company Name" placeholder="Enter Company Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email2" label="Branch" placeholder="Enter Company Branch" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email3" label="Address" placeholder="Street, Apt" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email4" label="Address 2" placeholder="Office, Room/Flat" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label" >Country</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >State / Provice</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >Sub-District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item >
            <TextField id="Email5" label="Postal / ZIP Code" placeholder="Enter Postal / Code" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item >
            <TextField id="Email5" label="Website" placeholder="www.thacthai.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
        <Button variant="contained" onClick={handleClickOpen}  sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={3}>
                   <Box sx={{ color: 'black', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Confirm User <br></br> Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please Check and confirm the information.</Box>
          <Divider/>
          <Box p={1} sx={{color: 'black', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
            <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>

              <TextField disabled id="outlined-disabled"label="First Name"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
            <br></br>
              <TextField disabled id="outlined-disabled"label="Last Name"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Job Title"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Mobile Number"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Email"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
         </Box>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
              <TextField disabled id="outlined-disabled"label="Company Name"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Branch"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Address"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Address 2"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Country"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="State / Provice"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="District"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Sub-District"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Postal / ZIP Code"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Website"defaultValue="Hello World" size='small' sx={{ width: '100%' }} />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm information is correct" />
          </Box>
          <Box>
              <Button variant="outlined" sx={{width:'100%'}}>Back</Button>
              <Box p={1}/>
              <Button variant="contained"  sx={{width:'100%'}}>Confirm</Button>
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
