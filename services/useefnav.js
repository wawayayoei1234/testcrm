import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function useefnav() {
    const { data: session } = useSession();
    const router = useRouter(); 
    useEffect(() => {
        if (!session) {
          router.push('/welcome');
        }
      }, [session]);
  return null;

}

export default useefnav