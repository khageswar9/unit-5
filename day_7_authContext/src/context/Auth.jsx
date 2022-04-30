import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth,setauth] = useState(false);

    const toggle = ()=>{
        setauth(!isAuth)
    }
    return <AuthContext.Provider value={{isAuth,toggle}}>{children}</AuthContext.Provider>
}