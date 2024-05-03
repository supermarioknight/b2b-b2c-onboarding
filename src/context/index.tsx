import React from 'react';
import { AuthProvider } from './auth.context';


export const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}