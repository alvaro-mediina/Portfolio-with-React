import './WelcomeProfile.css';
import pp from "../../../assets/imgs/pp.jpg";
import { useEffect, useState } from "react";
import { useInit, useUpdateInit } from "../../../context/AppProvider";

function WelcomeProfile() {
    const hasSeenInitialAnimation = useInit();
    const markAnimationAsCompleted = useUpdateInit();

    const [profileClass, setProfileClass] = useState(
        hasSeenInitialAnimation ? "WelcomeProfile__container" : "WelcomeProfile__init"
    );
    const [transitionCompleted, setTransitionCompleted] = useState(false);

    useEffect(() => {
        if (!hasSeenInitialAnimation) {
            const animationTimer = setTimeout(() => {
                setProfileClass("WelcomeProfile__container");
            }, 2000);

            return () => clearTimeout(animationTimer);
        } else {
            setTransitionCompleted(true);
        }
    }, [hasSeenInitialAnimation]);

    useEffect(() => {
        if (profileClass === "WelcomeProfile__container" && !hasSeenInitialAnimation) {
            const timer = setTimeout(() => {
                setTransitionCompleted(true);
                markAnimationAsCompleted();
            }, 1700);

            return () => clearTimeout(timer);
        }
    }, [profileClass, hasSeenInitialAnimation, markAnimationAsCompleted]);

    const showData = profileClass === "WelcomeProfile__container" && transitionCompleted;

    return (
        <div
            className={profileClass}
            style={
                hasSeenInitialAnimation
                    ? { transition: "none" }
                    : {}
            }
        >
            {showData && (
                <div className="Data">
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
                                <li>🤓 Estudiante de la Lic. en Ciencias de la Computación de FaMAF - UNC</li>
                                <li>🔱 Apasionado por la programación Front-End, por la resolución de problemas y el crecimiento personal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WelcomeProfile;
