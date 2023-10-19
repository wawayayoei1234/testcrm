import React, { createContext } from 'react';


export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[]});

  React.useEffect(() => {
  }, []);

  return (
    <>
     
      
      <MyContext.Provider value={[state, setState]}>
        {children}
      </MyContext.Provider>
    </>
  );
};