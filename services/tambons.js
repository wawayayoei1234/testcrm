import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function tambons() {
    const [state, setstate] = React.useContext(MyContext);
    useEffect(() => {
        fetch(`http://192.168.5.39:8005/tambons/${selectedAmphure}`,)
        .then(response => response.json())
        .then(result => setstate((prevData) => ({ ...prevData, tambons:  result})))
        .catch(error => console.log('error', error));
    },[]);
  
    return ( null
    
  )
}

export default tambons