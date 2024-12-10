import './App.css'
import Welcome from './components/Welcome'; 
import React, { useState } from 'react';
import { useContext } from 'react';

export const welcomeContext = React.createContext();

function App() {
    
    const [welcomeState, setWelcomeState] = useState(true);

    return (
        <welcomeContext.Provider value={welcomeState}>
            <div className="App">
                <Welcome/>
            </div>
        </welcomeContext.Provider>
    );
}


export default App
