import { MyContext } from '@/context';
import React from 'react'

export default function useHandleClick(props) {
    const [state, setstate] = React.useContext(MyContext);

    const handleClick =() =>{
        if(state.decode_token.length === undefined){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${state.bearer_token}`);
            
            var raw = JSON.stringify({
              "email": state.decode_token.email,
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
                setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:true,url_alert:"/emailverification" }));
              }else{
                setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:false }));
              }
            })
           .catch(error => {
            setstate((prevData) => ({...prevData,alert: true,errordetail: error,}))
           });
        }
    }
    return handleClick;
}
