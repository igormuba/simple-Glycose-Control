import React from 'react';

import InformarGlicemia from './views/informarGlicemia';
import DiarioControle from './views/diarioControle';
import DadosCadastrais from './views/dadosCadastrais';


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
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={InformarGlicemia} />
        <Route exact path="/diariocontrole" component={DiarioControle} />
        <Route exact path="/dadoscadastrais" component={DadosCadastrais} />
      </Switch>
    </Router>

  );
}

export default App;
