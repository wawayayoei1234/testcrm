import { MyContext } from '@/context';
import React, { useEffect } from 'react'
import HandletimeOutCallback from '@/hook/timeoutcallback'

function timeoutcallback() {
    const [state, setstate] = React.useContext(MyContext);
    const timeOutCallback = HandletimeOutCallback();

    useEffect(() => {
        setstate(prevAllTime => ({...prevAllTime,timeOutCallback: timeOutCallback}));
      }, [timeOutCallback]);
  return null;
}

export default timeoutcallback