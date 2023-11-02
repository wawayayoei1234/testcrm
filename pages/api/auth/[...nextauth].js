import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Facebook from 'next-auth/providers/facebook'
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions = {
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    })
  ]
  
}
export default NextAuth(authOptions)