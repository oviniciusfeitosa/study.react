import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props:any) => {

    const user = {
        name: "Vinicius"
    };

    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
};