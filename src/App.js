
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Merch from './components/pages/Merch';
import Music from './components/pages/Music';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
        <Router>
          <Navbar/>
             <Switch>
               <Route path ='/' exact component=
               {Home} />
               <Route path ='/Music' exact component=
               {Music} />
               <Route path ='/Merch' exact component=
               {Merch} />
               <Route path ='/Contact' exact component=
               {Contact} />
             </Switch>
        </Router>
    
    </>
  );
}

export default App;
