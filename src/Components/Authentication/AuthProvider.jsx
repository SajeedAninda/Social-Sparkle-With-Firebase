import React, { createContext } from 'react';
export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;