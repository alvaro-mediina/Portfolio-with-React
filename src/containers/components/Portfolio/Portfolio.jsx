
import './Portfolio.css'
import WelcomeProfile from '../../components/Welcome-Profile/WelcomeProfile'; 
import { useSection, useUpdateSection } from '../../../context/AppProvider';
import arrowL from '../../../assets/imgs/arrow.svg'
import arrowR from '../../../assets/imgs/arrow.svg'
import { useEffect, useState } from 'react';


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
                <div className="arrow-left" onClick={leftSection}>
                    <img src={arrowR}  draggable="false"/>
                </div>
            }

            {SECTION == "WELCOME" && <WelcomeProfile/>} 

            {isWelcomeCard &&
                <div className="arrow-right" onClick={rightSection}>
                    <img src={arrowL}  draggable="false"/>
                </div>
            }
        </div>
    );
}

export default Portfolio
