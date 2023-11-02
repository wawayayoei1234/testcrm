import { MyContext } from '@/context';
import React from 'react'

function handleClose() {
const [state, setstate] = React.useContext(MyContext);
  const handleClose = () => {
    setstate((prevData) => ({ ...prevData, anchorEl:  null}));
  };
  return handleClose
}

export default handleClose