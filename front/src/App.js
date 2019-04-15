import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Liste from './Component/Liste'
import Teste from './Component/Teste'
import Personne from './Component/Personne'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {


    return (
      <Router>
        <div className="App">
          

          <div className="App-content">
            <Route exact path="/" component={Teste}/>
            <Route path="/Liste" component={Liste}/>
            <Route path="/Personne" component={Personne}/>
          </div>

        </div>        
      </Router>
    )
  };

export default App;