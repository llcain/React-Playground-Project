import React from 'react';
import './App.css';

import Bedroom from './Bedroom';
import Home from './Home';
import Dining from './dining';
import Backyard from './backyard';
import Kitchen from './Kitchen';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Home} />
     <Route exact path="/bedroom" component={Bedroom} />
     <Route exact path="/dining" component={Dining} />
     <Route exact path="/kitchen" component={Kitchen} />
     <Route exact path="/backyard" component={Backyard} />
    </div>
  );
}

export default App;
