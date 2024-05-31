
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ dades, setDades ] = useState([])
    
    return (
        <GlobalContext.Provider value={{ dades, setDades }}> 
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

