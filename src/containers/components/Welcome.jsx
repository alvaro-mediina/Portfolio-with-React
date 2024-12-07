import './Welcome.css';
import pop from '../../assets/sounds/pop.mp3'
import { useState, useEffect, useContext } from 'react';
import { WELCOME } from '../../utils/Constants';

function Welcome () {
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
                    const audio = new Audio(pop)
                    audio.play();
                } else {
                    clearInterval(typingInterval); 
                }

            }, 300);

            return () => clearInterval(typingInterval); 
        }

        return () => clearTimeout(fadeTimer);
    }, [isBlackScreenVisible, currentIndex, WELCOME]);


    return(
        <div className="welcome__container">
            <div className={`black-screen ${!isBlackScreenVisible ? 'fade-out' : ''}`}></div>
            <div className="welcome__text">
                {typedText}
            </div>
            <div className="Background"></div>
            {/* <BackgroundVideo /> */}
        </div>
    );
}

export default Welcome;