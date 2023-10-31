import { MyContext } from '@/context';
import React, { useEffect } from 'react';

export default function Login(props) {
  const [state, setstate] = React.useContext(MyContext);

  useEffect(() => {
    async function fetchData() {
      if (state.btlogin) {
        const data = { email: state.username, password: state.password, remember: state.remember };
        try {
          const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}:${process.env.NEXT_PUBLIC_API_PORT_LOGIN}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (loginResponse.status===200) {
            const loginResult = await loginResponse.json();
            const decodedToken = JSON.parse(atob(loginResult.token.split('.')[1]));
            sessionStorage.setItem('decodedToken', JSON.stringify(decodedToken));
            setstate((prevData) => ({ ...prevData, access_token: decodedToken, bearer_token: loginResult.token }));
          }
          else if (loginResponse.status===400||loginResponse.status===401) {
            setstate((prevData) => ({
              ...prevData,
              alert: true,
              errordetail: 'Invalid username or password.',
            }));
          }
          else  {setstate((prevData) => ({...prevData,alert: true,errordetail: 'Unable to connect to the server! Please check the server.',}));
          }
        } catch (error) {
          setstate((prevData) => ({
            ...prevData,
            alert: true,
            errordetail: 'An error occurred while connecting to the server.',
          }));
        }
      }
    }
    fetchData();
  }, [state.btlogin]);

  return null;
}
