import './WelcomeProfile.css';
import pp from "../../../assets/imgs/pp.jpg";
import { useEffect, useState } from "react";

function WelcomeProfile () {
    const [profileClass, setProfileClass] = useState("WelcomeProfile__init");
    const [transitionCompleted, setTransitionCompleted] = useState(false);  
    const [initialAnimation, setinitialAnimation] = useState(false);

    useEffect(() => {
        if (!initialAnimation) {
            const animationTimer = setTimeout(() => {
                setProfileClass("WelcomeProfile__container");
                setinitialAnimation(true);
            }, 2000);

            return () => clearTimeout(animationTimer);
        }
    }, [initialAnimation]);
    
    useEffect(() => {
        if (profileClass === "WelcomeProfile__container") {
            const timer = setTimeout(() => {
                setTransitionCompleted(true); 
            }, 1700); 

            return () => clearTimeout(timer); 
        }
    }, [profileClass]);

    return (
        <>
            {
                <div className={profileClass}>
                    {profileClass === "WelcomeProfile__container" && transitionCompleted 
                     &&  <div className="Data">
                            <div className="left__container">
                                <div className="img">
                                    <img src={pp} alt="Profile" />
                                </div>
                                <div className="name">Alvaro Medina</div>
                            </div>
                            <div className="right__container">
                                <div className="text">
                                    <div className="hello">
                                    ¡BIENVENIDO A MI PORTFOLIO!
                                    </div>
                                    <ul>
                                        <li>🌵 Jujeño en Córdoba, Argentina</li>
                                        <li>🎂 21 años</li>
                                        <li>🤓 Estudiante de la Lic. en Ciencias de la 
                                            Computación de FaMAF - UNC</li>
                                        <li>🔱 Apasionado por la programación Front-End 
                                            , por la resolución de problemas y el 
                                            crecimiento personal. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default WelcomeProfile