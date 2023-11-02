import React from 'react'
import { signIn } from "next-auth/react";


function index() {
    const handleSignIn = (provider) => () => {
        signIn(provider)
     };
    return handleSignIn;
}

export default index