import { MyContext } from '@/context';
import React from 'react'

function index() {
    const [state, setstate] = React.useContext(MyContext);

    const updatePassword = (newPassword) => {
        const validations = {
          minLength: newPassword.length >= 8,
          hasNumber: /\d/.test(newPassword),
          hasUpper: /[A-Z]/.test(newPassword),
          hasLower: /[a-z]/.test(newPassword),
        };
        setstate((prevData) => ({ ...prevData, passwordsMatch: newPassword === state.confirmpassword,minLength: validations.minLength,hasNumber: validations.hasNumber,hasUpper: validations.hasUpper,hasLower: validations.hasLower, }))
      
      const strengthLevels = [
          validations.minLength,
          validations.hasNumber,
          validations.hasUpper,
          validations.hasLower,
          validations.hasSpecialChar,
        ].filter(Boolean).length;
      
        switch (strengthLevels) {
          case 0:
          case 1:
            setstate((prevData) => ({ ...prevData, passwordStrength: "Very Weak" }))
            break;
          case 2:
            setstate((prevData) => ({ ...prevData, passwordStrength: "Weak" }))
            break;
          case 3:
            setstate((prevData) => ({ ...prevData, passwordStrength: "Medium" }))
            break;
          case 4:
            setstate((prevData) => ({ ...prevData, passwordStrength: "Strong" }))
            break;
          case 5:
            setstate((prevData) => ({ ...prevData, passwordStrength: "Very Strong" }))
            break;
          default:
            setstate((prevData) => ({ ...prevData, passwordStrength: "" }))
        }
      };
  return updatePassword;
}

export default index