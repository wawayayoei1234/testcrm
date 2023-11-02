import { MyContext } from '@/context';
import React, { useCallback } from 'react'

function index() {
    const [state, setstate] = React.useContext(MyContext);
    const timeOutCallback = useCallback(() => {
        setstate(prevAllTime => ({...prevAllTime,timer: prevAllTime.timer - 1}));
      }, []);
  return timeOutCallback;
}

export default index