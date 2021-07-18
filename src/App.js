import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
             <Switch>
               <Route path ='/' exact/>
             </Switch>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <HeroSection/>
    </div>
  );
}

export default App;
