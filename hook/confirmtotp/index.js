import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React from 'react'

function index() {
    const [state, setstate] = React.useContext(MyContext);
    const router = useRouter();

    const handleclick = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "OTP": state.totp,
          "accountName": state.decode_token.email
        });
        
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_TOTP}:${process.env.NEXT_PUBLIC_API_PORT_TOTP}/verify-otp`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status==="OK"){
              router.push('/profile');
            }else{
              setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
          })
          .catch(error => console.log('error', error));
    }
  return handleclick;
}

export default index