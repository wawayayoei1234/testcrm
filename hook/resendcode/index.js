import { MyContext } from '@/context';
import React, { useContext } from 'react'

function index() {
    const [state, setstate] = useContext(MyContext);

    const handleclick =()=>{
      setstate((prevData) => ({ ...prevData, disabledbt: true,timer: 15}));
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"email": state.decode_token.email});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_SENDMAIL}:${process.env.NEXT_PUBLIC_API_PORT_SENDMAIL}/send-otp`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.status==="OK"){
            }else{
              setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
        })
        .catch(error => {
            setstate((prevData) => ({ ...prevData, alert: true,errordetail: error }));
        });

    }
  return handleclick;
}

export default index