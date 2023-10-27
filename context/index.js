import React, { createContext } from 'react';
import Provinces from '@/services/provinces';
import Amphures from '@/services/provinces';
import Tambons from '@/services/provinces';
import Zipcodes from '@/services/provinces';
export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"Tambons":[],"zipcode":[],"open":false, });

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