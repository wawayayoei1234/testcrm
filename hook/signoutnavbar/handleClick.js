import { MyContext } from '@/context';
import React from 'react'

function handleClick() {
  const [state, setstate] = React.useContext(MyContext);
    const handleClick = (event) => {
      setstate((prevData) => ({ ...prevData, anchorEl:  event.currentTarget}));
      };
  return handleClick
}

export default handleClick