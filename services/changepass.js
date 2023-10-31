import { MyContext } from '@/context';
import React, { useEffect } from 'react'

export default function Login(props) {
    const [state, setstate] = React.useContext(MyContext);

    useEffect(() => {
      async function fetchData() {
        if(state.access_token.length === undefined){
          if (state.btchangepass) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", `Bearer ${state.bearer_token}`);
          
          var raw = JSON.stringify({
            "email": state.access_token.email,
            "oldpassword": state.oldpassword,
            "newpassword": state.newpassword
          });
          
          var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}:${process.env.NEXT_PUBLIC_API_PORT_LOGIN}/api/change-password`, requestOptions)
         .then(response => response.json())
         .then(result => {
            if(result.status==="OK"){
              setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:true }));
            }else{
              setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:false }));
            }
          })
         .catch(error => {
          setstate((prevData) => ({...prevData,alert: true,errordetail: error,}))
         });
      }
      }
    }
      fetchData();
    }, [state.access_token,state.btchangepass]);
    
    return null;
}
