import './App.css'
import BackgroundVideo from '../components/BackgroundVideo/BackgroudVideo'
import { WELCOME } from '../utils/Constants'
import { useState, useEffect } from 'react'

function App() {
    const [isBlackScreenVisible, setBlackScreenVisible] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const fadeTimer = setTimeout(() => {
            setBlackScreenVisible(false);
        }, 500);

        // Comienza la animación de máquina de escribir después del fade
        if (!isBlackScreenVisible) {
            const typingInterval = setInterval(() => {
                if (currentIndex < WELCOME.length) {
                    setTypedText((prev) => prev + WELCOME[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    clearInterval(typingInterval); 
                }
            }, 300);

            return () => clearInterval(typingInterval); 
        }

        return () => clearTimeout(fadeTimer);
    }, [isBlackScreenVisible, currentIndex, WELCOME]);

    return (
        <div className="App">
            <div className={`black-screen ${!isBlackScreenVisible ? 'fade-out' : ''}`}></div>
            <div className="welcome-text">
                {typedText}
                <span className="cursor">|</span>
            </div>
            <BackgroundVideo />
        </div>
    );
}


export default App
