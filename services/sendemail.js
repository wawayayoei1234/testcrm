import { MyContext } from '@/context';
import { env } from '@/next.config';
import React, { useEffect } from 'react'

export default function Login(props) {
    const [state, setstate] = React.useContext(MyContext);

    useEffect(() => {
      if(state.btverify){
        setstate((prevData) => ({ ...prevData, loading: true}));
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": state.decode_token.email?state.decode_token.email:state.confirmlink_decode.email
        });
        
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
              setstate((prevData) => ({ ...prevData, loading: false}));
            }else{
              setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
          })
          .catch(error => {
            setstate((prevData) => ({ ...prevData, alert: true,errordetail: error }));
          });
      }
    }, [state.btverify]); 
    
    return null;
}
