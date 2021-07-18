
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Merch from './components/pages/Merch';
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
             <Switch>
               <Route path ='/' exact component=
               {Home}/>
               <Route path ='/src/components/pages/Merch.js' exact component=
               {Merch}/>
             </Switch>
             
        </Router>
    
    </div>
  );
}

export default App;
