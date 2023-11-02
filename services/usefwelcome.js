import { useSession } from 'next-auth/react';
import { router, useRouter } from 'next/router';
import React, { useEffect } from 'react'

function usefwelcome() {
  const { data: session } = useSession();
  const router = useRouter();
    useEffect(() => {
        if (session) {
          router.push('/profile');
        }
      }, [session]);
  return 
   
  
}

export default usefwelcome