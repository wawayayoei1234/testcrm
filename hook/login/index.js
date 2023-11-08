import { useContext } from 'react';
import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie'; // Import useCookies

function useHandleClick() {
  const [state, setstate] = useContext(MyContext);
  const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);
  const router = useRouter();
  const isFormValid = state.username && state.password && state.username.trim() !== '' && state.password.trim() !== '';

  const handleClick = ()=> {
    if (isFormValid) {
      setstate((prevData) => ({ ...prevData, btlogin: true,loading:true }));
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "email": state.username,
        "password": state.password,
        "remember": state.remember
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}:${process.env.NEXT_PUBLIC_API_PORT_LOGIN}/api/login`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status === "OK"){
            const decodedToken = JSON.parse(atob(result.token.split('.')[1]));
            const fakeexp = 1699408598;
            // const expirationDate = new Date(fakeexp * 1000); //
            const expirationDate = new Date(decodedToken.exp * 1000); //
            setCookie('bearer_token', result.token, { path: '/', expires: expirationDate });
            setstate((prevData) => ({ ...prevData, decode_token: decodedToken, bearer_token: result.token,loading:false}));
            if(decodedToken.requires_action==="change_password"){
              router.push('/resetpassword');
            }else{
              router.push('/emailverification');
              setstate((prevData) => ({ ...prevData, btverify: true}));
            }
          }else{
            setstate((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
          }
        })
        .catch(error => console.log('error', error));
     } else {
       setstate((prevData) => ({ ...prevData, alert: true,errordetail:"Please fill in both Email and Password fields." }));
     }
  }

  return handleClick;
}

export default useHandleClick;
