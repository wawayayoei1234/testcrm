import React, { createContext } from 'react';
import Provinces from '@/services/provinces';
import Amphures from '@/services/provinces';
import Tambons from '@/services/provinces';
import Zipcodes from '@/services/provinces';
import Login from '@/services/login';
import ChangePassword from '@/services/changepass'
import Alert from '@/components/alert'
import {Checkvalueinfield}  from '@/utils/checkvalueinfield';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"Tambons":[],"zipcode":[],"open":false,"username":"","password":"" ,"btlogin":false,btchangepass:false,"showPassword":false,
  "access_token":[],"bearer_token":[],"oldpassword":"","newpassword":"","confirmpassword":"","alert":false,"errordetail":"","isFormValid":false,
  "showPassword":false,"remember":false,"loading":false,"status":false
});

  React.useEffect(() => {
  }, []);

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
      <Provinces/>
      <Amphures/>
      <Tambons/>
      <Zipcodes/>
      <Login/>
      <ChangePassword/>
      <Alert/>
      <Checkvalueinfield/>
        {children}
      </MyContext.Provider>
    </>
  );
};