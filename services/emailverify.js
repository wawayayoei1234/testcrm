import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function emailverify() {
  const [state, setState] = React.useContext(MyContext);
  const router = useRouter();
  const handleButtonClick = async () => {
    if (!state.email) {
      setState(predata => ({ ...predata, alert: true,errordetail:"กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการส่งฟอร์ม." }))
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "company_email": state.email
    });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_VERIFYEMAIL}:${process.env.NEXT_PUBLIC_API_PORT_VERIFYEMAIL}/validate-domain`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: raw
      });
 
      if (response.status === 200) {
        const result = await response.json();
        setState(prevState => ({...prevState,validate: result}),); 
        if(result.match === true){
          router.push('/companyselection');
        }else
        {
          router.push('/registration');
        }
      } else {
        const result = await response.json();
        console.error('Error with status code:', response.status, result);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  return handleButtonClick
}
export default emailverify