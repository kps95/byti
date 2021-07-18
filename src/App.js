
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
    <video src="/videos/Since96 Ft. DP - Purpose.mp4" controls autoPlay loop muted />
        <Router>
          <Navbar/>
             <Switch>
               <Route path ='/' exact />
               <Route path ='/Music' exact component=
               {Music} />
               <Route path ='/Merch' exact component=
               {Merch} />
               <Route path ='/Contact' exact component=
               {Contact} />
             </Switch>
        </Router>
        <div className='App-link'>
           <p>
             Thinking...Since96
           </p>
        
        </div>
    
    </>
  );
}

export default App;
