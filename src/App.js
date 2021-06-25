import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                VPD User Auth Page
                <Login />
            </Router>
        </div>
    );
}

export default App;
