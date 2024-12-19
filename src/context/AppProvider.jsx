import React, {useContext, useState} from "react";

const SectionContext = React.createContext();
const SectionUpdateContext = React.createContext();

export const useSection = () => useContext(SectionContext);
export const useUpdateSection = () => useContext(SectionUpdateContext);

const SECTIONS = ["WELCOME", "PROJECTS", "SKILLS"];

export function AppProvider ({ children }){

    const [currentSection, setCurrentSection] = useState(0);

    const nextSection = () =>{
        setCurrentSection((prev) => (prev + 1) % SECTIONS.length);
    }
    
    const prevSection = () =>{
        setCurrentSection((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
    }

    return(
        <SectionContext.Provider value={SECTIONS[currentSection]}>
            <SectionUpdateContext.Provider value={{ prevSection, nextSection }}>
                {children}
            </SectionUpdateContext.Provider>
        </SectionContext.Provider>
    );
}