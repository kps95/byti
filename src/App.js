import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home'
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
             <Switch>
               <Route path ='/' exact component=
               {Home}/>
             </Switch>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
