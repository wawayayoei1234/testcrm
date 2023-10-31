import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function provinces() {

    const [state, setstate] = React.useContext(MyContext);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}:${process.env.NEXT_PUBLIC_API_PORT_GET}/provinces`, )
            .then(response => response.json())
            .then(result =>  setstate((prevData) => ({ ...prevData, provinces:  result})))
            .catch(error => {
              console.log("🚀 ~ file: provinces.js:13 ~ useEffect ~ error:", error)
              setstate((prevData) => ({ ...prevData, alert:true,errordetail:  `Unable to connect to the server! Please check the server.`}))
            });
    }, []);
  return null;
}

export default provinces