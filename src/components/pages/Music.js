import React from 'react'
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Music() {
    return (
        <div>
           <Router>
              <Navbar/>
                 <Switch>
                    <Route path ='/' exact/>
                 </Switch>
           </Router>
        </div>
    )
}
