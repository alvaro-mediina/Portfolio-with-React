import React, { useState, useContext } from "react";

export const welcomeProfileContext = React.createContext();
export const welcomeProfileToggleContext = React.createContext();

//Utilizo el contexto de bienvenida de perfil
export function useWelcomeProfileProvider () {
    return useContext(welcomeProfileContext);
}

//Seteo el contexto de bienvenida de perfil
export function useWelcomeProfileToggleContext () {
    return useContext(welcomeProfileToggleContext);
}

export function WelcomeProfileProvider ({children}) {
    const [welcome, setWelcome] = useState(false);
    const changeStateWelcome = () => {
        if(welcome){
            setWelcome(false);
        }else{
            setWelcome(true);
        }
    }

    return(
        <welcomeProfileContext.Provider value = {welcome}>
        <welcomeProfileToggleContext.Provider value = {changeStateWelcome}>
            {children}
        </welcomeProfileToggleContext.Provider>
    </welcomeProfileContext.Provider>
    );
}