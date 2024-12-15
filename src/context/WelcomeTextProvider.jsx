import React, { useState, useContext } from "react";

export const welcomeTextContext = React.createContext();
export const welcomeTextToggleContext = React.createContext();


//Utilizo el contexto de bienvenida de texto
export function useWelcomeTextProvider () {
    return useContext(welcomeTextContext);
}

//Seteo el contexto de bienvenida
export function useWelcomeTextToggleContext () {
    return welcomeTextContext(welcomeTextToggleContext);
}

export function WelcomeTextProvider ({ children }) {
    const [welcome, setWelcome] = useState(true);

    const changeStateWelcome = () => {
        if(welcome){
            setWelcome(false);
        }else{
            setWelcome(true);
        }
    }
    
    return(
        <welcomeTextContext.Provider value = {welcome}>
            <welcomeTextToggleContext.Provider value = {changeStateWelcome}>
                {children}
            </welcomeTextToggleContext.Provider>
        </welcomeTextContext.Provider>
    );
}
