import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function countries() {
    const [state, setState] = React.useContext(MyContext);
    useEffect(() => {
        fetch("http://192.168.5.48:8009/api1/countries")
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to load countries');
            }
            return response.json();
          })
          .then(result => {
            setState(prevState => ({ ...prevState, countries: result }));
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);
  return null;

 
}

export default countries