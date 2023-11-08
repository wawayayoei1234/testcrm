import React, { createContext } from 'react';
import Provinces from '@/services/provinces';
import Amphures from '@/services/provinces';
import Tambons from '@/services/provinces';
import Zipcodes from '@/services/provinces';
export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"tambons":[],"zipcode":[],"open":false,"anchorEl":null,"data":[],"selectedProvince":(""),
  "selectedAmphoe":(""),"selectedTambon":(""),"firstName":(""),"LastName":(""),"jobTitle":(""),"company_email":(""),
  "MobileNumber":(""),"CompanyName":(""),"Branch":(""),"Address":(""),"Address2":(""),"Website":(""),"Country":(""),
  "Confirmed":false,"Email":(""),"OpenAlert":false,"selectedCountry":("")});

  React.useEffect(() => {
  }, []);
  return (
    <>
      <MyContext.Provider value={[state, setState]}>
      <Provinces/>
      <Amphures/>
      <Tambons/>
      <Zipcodes/>
        {children}
      </MyContext.Provider>
    </>
  );
};