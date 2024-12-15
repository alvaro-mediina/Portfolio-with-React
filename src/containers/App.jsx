import './App.css'
import { WelcomeProfileProvider } from '../context/WelcomeProfileProvider';
import WelcomeProfile from './components/Welcome-Profile/WelcomeProfile'; 
import React from 'react';



function App() {
    
    return (
        <div className="App">
            <WelcomeProfileProvider>
                <WelcomeProfile/>
            </WelcomeProfileProvider>
        </div>
    );
}


export default App
