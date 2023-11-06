import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie'; // Import useCookies
import { MyContext } from '@/context';

function useEfotp() {
  const [state, setState] = useContext(MyContext);
  useEffect(() => {
    if (state.decode_token.length === 0&&state.confirmlink_decode.length === 0) {
      setState((prevData) => ({ ...prevData, alert: true, errordetail: "Please login again", url_alert: "/login" }));
    }
  }, [state.decode_token, setState]);



  return null;
}

export default useEfotp;
