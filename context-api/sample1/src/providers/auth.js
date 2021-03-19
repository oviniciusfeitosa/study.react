import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {

  const user = {
    name: "Vinicius Feitosa da Silva"
  };

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
};