import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function useefotp() {
    const [state, setstate] = React.useContext(MyContext);

    useEffect(() => {
        if(state.decode_token.length === 0) {
          setstate((prevData) => ({ ...prevData, alert: true,errordetail: "Please login again",url_alert:"/login" }));
        }
      }, [state.decode_token]);
  return null;
}

export default useefotp