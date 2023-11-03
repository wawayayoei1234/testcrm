import {  Button } from '@mui/material'
import React from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import useHandleClick from '@/hook/resetpassword';


function SubmitButton() { 
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = useHandleClick();
  return (
    <div>
       {/* //?Button */}
       <Button disabled={!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch} onClick={handleClick}  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',color:`${themedata[0].three}`,
        width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,backgroundColor:!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch?`${themedata[0].four}`:`${themedata[0].primary}` }}>{ResetPassText[0].buttontext}</Button>
       {/* //?Button */}
    </div>
  )
}

export default SubmitButton