import React, { useContext, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Image from 'next/image';
import logocmpany from 'data/images/image 8.png';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata';
import { MyContext } from 'context';
import { useRouter } from 'next/router';

function Index() {
  const [state, setState] = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleButtonClick = async () => {
    if (!email) {
      setOpenAlert(true);
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "company_email": email
    });

    try {
      const response = await fetch("http://192.168.5.58:8008/validate-domain", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: raw
      });

      if (response.status === 200) {
        const result = await response.json();
        setState(prevState => ({
          ...prevState,
          CompanyName: result.corporate_name_en,
          selectedCountry: result.country_name,
          selectedProvince: result.local_address_province,
          selectedAmphoe: result.district,
          selectedTambon: result.sub_district,
          zipcode: result.local_address_zipcode,
          Address: result.address1,
          Address2: result.address2,
          Website: result.website,
          math: result.match
        }), console.log(state));
        router.push('/companyselection');
      } else {
        const result = await response.json();
        console.error('Error with status code:', response.status, result);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Box sx={{ background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`, height: "100vh", width: '100%' }}>
      <Box p={4} sx={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word' }}>Enter Company E-mail</Box>
        <Box pb={3} sx={{ color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left' }}>Please enter your company email address.</Box>
        <Box pb={3}><Image alt="Iconview" src={logocmpany} width={200} height={'auto'} /></Box>
        <TextField id="Email" value={email} onChange={handleEmailChange} label="Company Email Address" placeholder="@tracthai.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
        <Button onClick={handleButtonClick} variant='contained' style={{ fontSize: '12px', padding: '6px 12px', backgroundColor: `${themedata[0].primary}`, width: '300px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}` }}>Next</Button>
      </Box>
      <Dialog open={openAlert} onClose={handleCloseAlert} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
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
  );
}

export default Index;
