import './WelcomeProfile.css';
import { useWelcomeProfileProvider, useWelcomeProfileToggleContext} from "../../../context/WelcomeProfileProvider";
import pp from "../../../assets/imgs/pp.jpg";
import { useEffect, useState } from "react";

function WelcomeProfile () {
    const WELCOME_PROFILE = useWelcomeProfileProvider();
    const changeWelcomeProfile = useWelcomeProfileToggleContext();
    const [profileClass, setProfileClass] = useState("WelcomeProfile__init");
    const [transitionCompleted, setTransitionCompleted] = useState(false);  

    console.log(WELCOME_PROFILE);
    useEffect(changeWelcomeProfile,[]);

    useEffect(()=>{
        if (WELCOME_PROFILE)
            setProfileClass("WelcomeProfile__container");
            console.log(profileClass + " seted");
    },[profileClass]);

    useEffect(()=>{
        const animationTimer = setTimeout(() => {
            setProfileClass("WelcomeProfile__container");
        }, 2000);

        return () => clearTimeout(animationTimer);
    }, [])


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
            {WELCOME_PROFILE &&
                <div className={profileClass}>
                    {profileClass === "WelcomeProfile__container" && transitionCompleted &&  
                        <div className="Data">
                            <div className="img">
                                <img src={pp} alt="Profile" />
                            </div>
                            <div className="text">
                                Alvaro Medina
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default WelcomeProfile