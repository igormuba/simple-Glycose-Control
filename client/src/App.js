import React from 'react';

import InformarGlicemia from './views/informarGlicemia';
import DiarioControle from './views/diarioControle';

import NavigationBar from './components/navigationBar';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={InformarGlicemia} />
        <Route exact path="/diariocontrole" component={DiarioControle} />

      </Switch>
    </Router>

  );
}

export default App;
