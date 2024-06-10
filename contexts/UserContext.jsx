import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        uf: 'placeholder',
        city: 'placeholder'
    });
    
    const [franquia, setFranquia] = useState('');

    useEffect(() => {
        const storedFranquia = localStorage.getItem('franquia');
        console.log("franquia no useEffect User Context: ", storedFranquia)
        if (storedFranquia) {
            setFranquia(storedFranquia);
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                franquia,
                setFranquia
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
