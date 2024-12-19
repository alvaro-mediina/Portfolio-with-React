import './App.css'
import { AppProvider } from '../context/AppProvider';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    return (
            <AppProvider>
                <Portfolio/>
            </AppProvider>
    );
}


export default App
