import { MyContext } from '@/context';
import React from 'react'

export function Checkvalueinfield(props) {
    const [state, setstate] = React.useContext(MyContext);
    const isFormValid = state.username && state.password && state.username.trim() !== '' && state.password.trim() !== '';
 
    return isFormValid;
}
