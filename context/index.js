import React, { createContext } from 'react';
import Provinces from '@/services/provinces';
import Amphures from '@/services/provinces';
import Tambons from '@/services/provinces';
import Zipcodes from '@/services/provinces';
import SendEmail from '@/services/sendemail'
import Alert from '@/components/alert'
import {Checkvalueinfield}  from '@/utils/checkvalueinfield';
import Timeoutcallback from '@/services/timeoutcallback';
import SetTimeout from '@/services/settimeout';
export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"Tambons":[],"zipcode":[],"open":false,"username":"","password":"" ,"btlogin":false,btchangepass:false,"showPassword":false,
  "decode_token":[],"bearer_token":[],"oldpassword":"","newpassword":"","confirmpassword":"","alert":false,"errordetail":"","isFormValid":false,
  "showPassword":false,"remember":false,"loading":false,"status":false,"url_alert":"","btverify":false,"otp":"","timer": 0,"timeOutCallback": null,
  "disabledbt":false,showNewPassword:false,showConPassword:false
});

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
      {/* <Provinces/>
      <Amphures/>
      <Tambons/>
      <Zipcodes/> */}
      {/* <Login/> */}
      <SendEmail/>
      <Alert/>
      <Checkvalueinfield/>
      <Timeoutcallback/>
      <SetTimeout/>
        {children}
      </MyContext.Provider>
    </>
  );
};