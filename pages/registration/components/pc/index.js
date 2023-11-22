import { Box, Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { useSession } from 'next-auth/react';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function index() {
  const [state, setState] = useContext(MyContext);
  const { data: session } = useSession();
  const handleCheckboxChange = (event) => {
  setState((prevData) => ({ ...prevData, Confirmed: event.target.checked }));
}
const [openAlert, setOpenAlert] = useState(false);
const handleClickOpen = () => {
   if (state.firstName && state.LastName && state.jobTitle && state.email && state.MobileNumber && state.validate.corporate_name_en && state.validate.address1 && state.validate.address2
    && state.validate.website && state.MobileNumber && state.validate.country_name && state.validate.local_address_province && state.validate.sub_district
    && state.validate.district && state.validate.local_address_zipcode ) {
      setState((prevData) => ({ ...prevData, openpc: true }))
  } else {
    setOpenAlert(true);
  }
}
const handleCloseAlert = () => {
  setOpenAlert(false);
}
const handleClose = () => {
  setState((prevData) => ({ ...prevData, openpc: false }));
}
  const handleCountryChange = (event) => {
    setState(prevState => ({ ...prevState, selectedCountry: event.target.value }));
  };
  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setState(prev => ({ ...prev, selectedProvince }));
    const amphoesData = state.data
      .filter(item => item.ProvinceThai === selectedProvince)
      .map(item => item.DistrictThai);
    setState(prev => ({
      ...prev,
      amphures: Array.from(new Set(amphoesData)).sort(),
      selectedAmphoe: '',
      selectedTambon: '',
      zipcode: ''
    }));
  };
  const handleAmphoeChange = (event) => {
    const selectedAmphoe = event.target.value;
    setState(prev => ({ ...prev, selectedAmphoe }));
    const tambonsData = state.data
      .filter(item => item.DistrictThai === selectedAmphoe)
      .map(item => item.TambonThai);
    setState(prev => ({
      ...prev,
      tambons: Array.from(new Set(tambonsData)).sort(),
      selectedTambon: '',
      zipcode: ''
    }));
  };
  const handleTambonChange = (event) => {
    const selectedTambon = event.target.value;
    setState(prev => ({ ...prev, selectedTambon }));
    const tambonData = state.data.find(item => item.TambonThai === selectedTambon);
    if (tambonData) {
      setState(prev => ({ ...prev, zipcode: tambonData.PostCodeMain }));
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = async () => {
    const payload = {
      email: session.user.email,
      company_email: state.email, 
      job_title: state.jobTitle,
      firstname: state.firstName,
      lastname: state.LastName,
      company_name: state.validate.corporate_name_en,
      address: state.validate.address1,
      address2: state.validate.address2,
      website: state.validate.website,
      mobile_number: state.MobileNumber,
      country: state.validate.country_name,
      province: state.validate.local_address_province,
      district: state.validate.district,
      sub_district: state.validate.sub_district,
      postal_zipcode: state.validate.local_address_zipcode,
    };
    try {
      const response = await fetch("http://192.168.5.38:8008/register-chiccrm", {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      if (response.status === 200) {
        window.location.href = '/checkyouremail';
      } else {
        const result = await response.json();
        console.error('Error with status code:', response.status, result);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
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
          <Grid item  container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item xs={4} pb={2}>
            <TextField  id="firstName" name="firstName" label="First Name"placeholder="Enter Your First Name" size='small' value={state.firstName} onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField  id="jobTitle" name="jobTitle" label="Job Title"placeholder="Enter Your Job Title" size='small' value={state.jobTitle} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField disabled={state.validate.match === true ? true :true }  id="Email" name="company_email" label="Email"placeholder="example@thac.com" size='small'value={state.email} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid item xs={4}>
            <TextField  id="LastName" name="LastName" label="Last Name"placeholder="Enter Your Last Name" size='small' value={state.LastName} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid item xs={4}>
            <TextField  id="MobileNumber" name="MobileNumber" label="Mobile Number"placeholder="Enter Your Mobile Number" size='small'value={state.MobileNumber} onChange={handleInputChange}   style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
          </Grid>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item xs={4} pb={2}>
            <TextField disabled={state.validate.match === true ? true : false } id="CompanyName" name="CompanyName"  label="Company Name"placeholder="Enter Company Name" size='small'value={state.validate.corporate_name_en} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            {state.validate.match === false ? 
            (<FormControl >
           <InputLabel id="country-select-label">Country</InputLabel>
            <Select labelId="country-select-label"id="country-select"value={state.selectedCountry}label="Country"onChange={handleCountryChange} 
            style={{ width: '300px', height: '40px' }} size='small'>
                {state.countries && state.countries.map((country, index) => (
                <MenuItem key={index} value={country.name}>
                  {country.name}
                </MenuItem>
              ))} 
            </Select>
            </FormControl>):
            (<TextField disabled id="Country" name="Country"  label="Country"placeholder="Country" size='small'value={state.validate.country_name}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            )}
            </Grid>
            <Grid item xs={4}>
            <TextField  disabled={state.validate.match === true ? true :true }  label="Postal Code" variant="outlined" placeholder="Postal Code"  size='small'   value={state.validate.local_address_zipcode}  InputProps={{ readOnly: true, }} style={{ width: '300px', height: '60px' }} focused />
            </Grid>     
            <Grid item xs={4}pb={2}>
            <TextField  disabled={state.validate.match === true ?true :true } id="Branch" name="Branch"  label="Branch"placeholder="Branch" size='small' value={state.Branch} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid item xs={4}>
            {state.validate.match === false ?  
            <FormControl >
            <InputLabel >State / Provice</InputLabel>
            <Select labelId="province-select" id="province-select" value={state.validate.local_address_province} label="Province" onChange={handleProvinceChange}
            style={{ width: '300px', height: '40px' }} size='small'>
              {state.provinces.map((province, index) => (
                <MenuItem key={index} value={province}>
                  {province}
                </MenuItem>))}
            </Select>
            </FormControl>
              :
              <TextField disabled={state.validate.match === true ? true : true } id="Province" name="Province"  label="Province"placeholder="Province" size='small'value={state.validate.local_address_province}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
              }
            </Grid> 
            <Grid item xs={4} pb={2}>
            <TextField  disabled={state.validate.match === true  ?true :false } id="Website" name="Website" label="Website"placeholder="www.thacthai.com" size='small' value={state.validate.website}  onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4} pb={2}>
            <TextField disabled={state.validate.match === true ?true :false } id="Address" name="Address" label="Address"placeholder="Street, Apt" size='small' value={state.validate.address1} onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            {state.validate.match === false ? 
        <FormControl >
          <InputLabel id="amphoe-select-label">Amphoe</InputLabel>
          <Select labelId="amphoe-select-label" id="amphoe-select" value={state.selectedAmphoe} label="Amphoe" onChange={handleAmphoeChange}
          style={{ width: '300px', height: '40px' }} size='small'>
           {state.selectedProvince &&  state.amphures.map((amphoe, index) => (
              <MenuItem key={index} value={amphoe}>
                {amphoe}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        :<TextField disabled={state.validate.match === true ? true : true } id="Amphoe" name="Amphoe"  label="Amphoe"placeholder="Amphoe" size='small'value={state.validate.district}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
        }
       </Grid>
            <Grid item xs={4}></Grid>      
            <Grid item xs={4}>
            <TextField disabled={state.validate.match === true ? true :false } id="Address2" name="Address2" label="Address 2"placeholder="Office, Room/Flat" size='small'value={state.validate.address2} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid item xs={4}>
            {state.validate.match === false ? 
            <FormControl fullWidth>
              <InputLabel id="tambon-select-label">Tambon</InputLabel>
              <Select labelId="tambon-select-label" id="tambon-select"value={state.selectedTambon} label="Tambon"
                onChange={handleTambonChange} style={{ width: '300px', height: '40px' }} size='small'>
                {state.selectedAmphoe && state.tambons.map((tambon, index) => (
                  <MenuItem key={index} value={tambon}>
                    {tambon}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            :<TextField disabled={state.validate.match === true ? true : true } id="Tambon" name="Tambon"  label="Tambon"placeholder="Tambon" size='small'value={state.validate.sub_district} style={{ width: '300px', height: '60px' }} focused color='primary'/>
            }
          </Grid> 
          </Grid>
          </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mb:3}}>
        <Button variant="contained" onClick={handleClickOpen} sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
        <Dialog fullScreen open={state.openpc} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={2}>
                   <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid item  container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.firstName} size='small' sx={{ width: '70%' }}  />
            </Grid>
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.jobTitle} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.email} size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.LastName} size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.MobileNumber} size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={2}/>
          <Divider/>
          <Box p={3} sx={{color: `${themedata[0].ten}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid item  container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item  xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.corporate_name_en} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.country_name} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.local_address_zipcode} size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid item  xs={4}pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.Branch}  size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.local_address_province} size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid item xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.website} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.address1} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.district} size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid item xs={4}></Grid>      
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.validate.address2} size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid item xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.validate.sub_district} size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControlLabel control={<Checkbox checked={state.Confirmed} onChange={handleCheckboxChange}/>} label="Confirm information is correct" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="outlined" onClick={handleClose} sx={{width:'30%'}}>Back</Button>
              <Box p={1}/>
              <Button disabled={!state.Confirmed} variant="contained"sx={{width:'30%'}} onClick={handleSubmit} >{state.loading?<Loading/>:buttontext[0].text}</Button>
            </Box>
          </Box>
            </Dialog>
            <Dialog open={openAlert}onClose={handleCloseAlert}aria-labelledby="alert-dialog-title"aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">{"ข้อมูลไม่ครบถ้วน"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการส่งฟอร์ม.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAlert} color="primary" autoFocus>
                  ตกลง
                </Button>
              </DialogActions>
            </Dialog>
              </Box>
            </Box>
          </Box>
          </Box> 
        </Box>
  )
}
export default index
