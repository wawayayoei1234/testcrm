import React from 'react'
import { signOut, useSession } from "next-auth/react";

function handlelogout() {
    const handleLogout = async () => {
        await signOut();
    }
  return handleLogout
  
  
}

export default handlelogout