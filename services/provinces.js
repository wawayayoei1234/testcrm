import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function provinces() {

    const [state, setstate] = React.useContext(MyContext);

      useEffect(() => {
    if (!state.data.length) {
      fetch("http://192.168.5.43:8009/Thailand-Tambon")
        .then(response => response.json())
        .then(data => {
          const provincesData = Array.from(new Set(data.map(item => item.ProvinceThai))).sort();
          setstate(prev => ({ ...prev, data, provinces: provincesData }));
        })
        .catch(error => console.error('Error fetching data: ', error));
    }
  }, [state, setstate]);
  return null;
}

export default provinces