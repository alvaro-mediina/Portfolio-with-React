import './Welcome.css';
import { useState, useEffect, useContext } from 'react';
import { welcomeContext } from '../App';
import { WELCOME } from '../../utils/Constants';

function Welcome() {
    // Recupero la información del contexto de Welcome
    const WELCOME_STATE = useContext(welcomeContext);

    const [isBlackScreenVisible, setBlackScreenVisible] = useState(true);
    const [isGreenBackground, setGreenBackground] = useState(false);
    const [typedText, setTypedText] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    //Hook para la transición inicial
    useEffect(()=>{
        const fadeTimer = setTimeout(() => {
            setBlackScreenVisible(false);
        }, 1000);

        return () => clearTimeout(fadeTimer);
    }, [WELCOME_STATE])

    //Aparición del espacio verde
    useEffect(()=>{
        if(!isBlackScreenVisible){
            setGreenBackground(true);
            const greenBackgroundTimer = setTimeout(() => {
                setGreenBackground(false);
                console.log("Muestro Verde");
            }, 1000);
            return () => clearTimeout(greenBackgroundTimer);
        }
    }, [isBlackScreenVisible])

    //Escritura de Welcome
    useEffect(() => {
        // Comienza la animación de máquina de escribir después del fade
        if (!isBlackScreenVisible && !isGreenBackground) {
            const typingInterval = setInterval(() => {
                if (currentIndex < WELCOME.length) {
                    setTypedText((prev) => [
                        ...prev,
                        { char: WELCOME[currentIndex], animate: true },
                    ]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);

                    // Desactiva la animación para las letras después de 300ms
                    setTimeout(() => {
                        setTypedText((prev) =>
                            prev.map((item, index) =>
                                index === prev.length - 1
                                    ? { ...item, animate: false }
                                    : item
                            )
                        );
                    }, 300);
                } else {
                    clearInterval(typingInterval);
                }
            }, 300);

            return () => clearInterval(typingInterval);
        }
    }, [isBlackScreenVisible, isGreenBackground, currentIndex]);

    return (
        <>
            {WELCOME_STATE && (
                <div className="welcome__container">
                    <div
                        className={`black-screen ${ !isBlackScreenVisible ? 'fade-out' : ''}`}
                    ></div>

                    <div className="welcome__text">
                        {typedText.map((item, index) => (
                            <span
                                key={index}
                                className={`letter ${
                                    item.animate ? 'grow-effect' : ''
                                }`}
                            >
                                {item.char}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Welcome;