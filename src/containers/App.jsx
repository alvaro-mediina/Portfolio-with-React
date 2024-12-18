import './App.css'
import { WelcomeProfileProvider } from '../context/WelcomeProfileProvider';
import WelcomeProfile from './components/Welcome-Profile/WelcomeProfile'; 
import arrowL from '../assets/imgs/arrow.svg'
import arrowR from '../assets/imgs/arrow.svg'
import React, { useEffect, useState } from 'react';



function App() {
    const [isWelcomeCard, setIsWelcomeCard] = useState(false);
    
    const leftSection = () => {
        console.log("Click Efectuado")
    };

    const rightSection = () => {
        console.log("Click Efectuado")
    };

    useEffect(()=>{
        const animationTimer = setTimeout(() => {
            setIsWelcomeCard(true);
        }, 4000);

        return () => clearTimeout(animationTimer);
    },[]);

    return (
        <div className="App">
            {isWelcomeCard && 
                <div className="arrow-left" onClick={leftSection}>
                    <img src={arrowR}  draggable="false"/>
                </div>
            }
            <WelcomeProfileProvider>
                <WelcomeProfile/>
            </WelcomeProfileProvider>

            {isWelcomeCard &&
                <div className="arrow-right" onClick={rightSection}>
                    <img src={arrowL}  draggable="false"/>
                </div>
            }
        </div>
    );
}


export default App
