import './App.css'
import { WelcomeProvider } from '../context/WelcomeProvider';
import Welcome from './components/Welcome'; 
import React, { useState } from 'react';



function App() {
    
    return (
        <div className="App">
            <WelcomeProvider>   
                <Welcome/>
            </WelcomeProvider>
        </div>
    );
}


export default App
