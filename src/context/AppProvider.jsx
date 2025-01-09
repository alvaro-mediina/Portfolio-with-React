import React, {useContext, useState} from "react";

//Secciones
const SectionContext = React.createContext();
const SectionUpdateContext = React.createContext();
const SECTIONS = ["WELCOME", "PROJECTS", "SOCIAL"];

export const useSection = () => useContext(SectionContext);
export const useUpdateSection = () => useContext(SectionUpdateContext);

//Animación Inicial
const InitContext = React.createContext();
const InitUpdateContext = React.createContext();

export const useInit = () => useContext(InitContext);
export const useUpdateInit = () => useContext(InitUpdateContext);


//Provedor General
export function AppProvider ({ children }){
    const [currentSection, setCurrentSection] = useState(0);
    const [hasSeenInitialAnimation, setHasSeenInitialAnimation] = useState(false);


    const rightSection = () =>{
        setCurrentSection((prev) => (prev + 1) % SECTIONS.length);
    }
    
    const leftSection = () =>{
        setCurrentSection((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
    }

    const markAnimationCompleted = () => {
        setHasSeenInitialAnimation(true);
    }

    return (
        <InitContext.Provider value={hasSeenInitialAnimation}>
            <InitUpdateContext.Provider value={markAnimationCompleted}>
                <SectionContext.Provider value={SECTIONS[currentSection]}>
                    <SectionUpdateContext.Provider value={{ leftSection, rightSection }}>
                        {children}
                    </SectionUpdateContext.Provider>
                </SectionContext.Provider>
            </InitUpdateContext.Provider>
        </InitContext.Provider>
    );
}