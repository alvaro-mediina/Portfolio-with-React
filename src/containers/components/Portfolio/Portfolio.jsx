
import './Portfolio.css'
import { useEffect, useState } from 'react';
import { useSection, useUpdateSection } from '../../../context/AppProvider';
import WelcomeProfile from '../Welcome-Profile/WelcomeProfile'; 
import Projects from '../Projects/Projects';
import Social from '../Social/Social';
import arrowL from '../../../assets/imgs/arrow.svg'
import arrowR from '../../../assets/imgs/arrow.svg'


function Portfolio () {
    const SECTION = useSection();
    const { leftSection, rightSection } = useUpdateSection();
    const [isWelcomeCard, setIsWelcomeCard] = useState(false);

    useEffect(()=>{console.log(SECTION)}, [SECTION]);

    useEffect(()=>{
        const animationTimer = setTimeout(() => {
            setIsWelcomeCard(true);
        }, 4000);

        return () => clearTimeout(animationTimer);
    },[]);

    return (
        <div className="Portfolio">
            {isWelcomeCard && 
                <div className="arrow-left" onClick={() => leftSection()}>
                    <img src={arrowR}  draggable="false"/>
                </div>
            }

            {SECTION == "WELCOME" && <WelcomeProfile/>}
            {SECTION == "SOCIAL" && <Social/>} 
            {SECTION == "PROJECTS" && <Projects/>} 

            {isWelcomeCard &&
                <div className="arrow-right" onClick={() => leftSection()}>
                    <img src={arrowL}  draggable="false"/>
                </div>
            }
        </div>
    );
}

export default Portfolio
