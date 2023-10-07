import React, { createContext } from 'react';
export let AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    let githubLogin = () => {
        return signInWithPopup(auth, gitProvider)

    }






    let authorization = {
        register,
        login,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;