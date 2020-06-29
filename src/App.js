import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {store, persistor} from '../src/store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/* Paginas */
import Login from './view/login/';
//import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import RecuperarSenha from './view/recuperar_senha/';
//import EventoCadastro from './view/evento-cadastro/';
import EventoDetalhes from './view/evento-detalhes/';
import CadastroComputador from './view/views-cadastros/cadastro-computador';
import CadastroNotebook from './view/views-cadastros/cadastro-notebook';
import CadastroEstabilizador from './view/views-cadastros/cadastro-estabilizador';
import CadastroMonitor from './view/views-cadastros/cadastro-monitor';
import CadastroFonte from './view/views-cadastros/cadastro-fonte';
import HomeTic from './view/home-tic';
import HomeTfl from './view/home-tfl';
import CadastroPinpad from './view/views-cadastros/cadastro-pinpad';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route exact path='/' component={Login} />
        {/*<Route exact path='/novousuario' component={NovoUsuario} />*/}
        <Route exact path="/cagece" component={Home} />
        <Route exact path="/tic" component={HomeTic} />
        <Route exact path="/tfl" component={HomeTfl} />
        <Route exact path="/recuperarsenha" component={RecuperarSenha} />
        {/*<Route exact path="/cadastro" component={EventoCadastro} />*/}
        <Route exact path="/detalhes/:id/:data/:tipo" component={EventoDetalhes} />
        {/*<Route exact path="/editar/:id" component={EventoCadastro} />*/}
        <Route exact path="/cadastro-computador" component={CadastroComputador} />
        <Route exact path="/editar-computador/:id" component={CadastroComputador} />
        <Route exact path="/cadastro-notebook" component={CadastroNotebook} />
        <Route exact path="/editar-notebook/:id" component={CadastroNotebook} />
        <Route exact path="/cadastro-estabilizador" component={CadastroEstabilizador} />
        <Route exact path="/editar-estabilizador/:id" component={CadastroEstabilizador} />
        <Route exact path="/cadastro-monitor" component={CadastroMonitor} />
        <Route exact path="/editar-monitor/:id" component={CadastroMonitor} />
        <Route exact path="/cadastro-fonte" component={CadastroFonte} />
        <Route exact path="/editar-fonte/:id" component={CadastroFonte} />
        <Route exact path="/cadastro-pinpad" component={CadastroPinpad} />
        <Route exact path="/editar-pinpad/:id" component={CadastroPinpad} />
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
