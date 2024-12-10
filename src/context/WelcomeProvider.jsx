import React, { useState, useContext } from "react";

export const welcomeContext = React.createContext();
export const welcomeToggleContext = React.createContext();


//Utilizo el contexto de bienvenida
export function useWelcomeProvider () {
    return useContext(welcomeContext);
}

//Seteo el contexto de bienvenida
export function useWelcomeToggleContext () {
    return welcomeContext(welcomeToggleContext);
}

export function WelcomeProvider ({ children }) {
    const [welcome, setWelcome] = useState(true);

    const changeStateWelcome = () => {
        if(welcome){
            setWelcome(false);
        }else{
            setWelcome(true);
        }
    }
    
    return(
        <welcomeContext.Provider value = {welcome}>
            <welcomeToggleContext.Provider value = {changeStateWelcome}>
                {children}
            </welcomeToggleContext.Provider>
        </welcomeContext.Provider>
    );
}
