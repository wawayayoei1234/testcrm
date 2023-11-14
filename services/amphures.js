import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function amphures() {
    const [state, setstate] = React.useContext(MyContext);

    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}:${process.env.NEXT_PUBLIC_API_PORT_GET}/amphures/${selectedProvince}`)
    .then(response => response.json())
    .then(result => setstate((prevData) => ({ ...prevData, amphures:  result})))
    .catch(error => {
      setstate((prevData) => ({ ...prevData, alert:true,errordetail:  "Unable to connect to the server! Please check the server."}))
    });
}, []);
    return (null
  )
}

export default amphures