import './App.css'
import BackgroundVideo from '../components/BackgroundVideo/BackgroudVideo'

function App() {

    const text = "BIENVENIDO";
    
    const textWithSpans = text.split('').map((letter, index) => (
        <span key={index} className="letter">{letter}</span>
    ));

    return (
        <div className="App">
            <div className="text">
                {textWithSpans}
                <span className="cursor">|</span> 
            </div>
            <BackgroundVideo />
        </div>
    )
}

export default App
