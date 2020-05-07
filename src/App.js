import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* Paginas */
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import RecuperarSenha from './view/recuperar_senha/';
import EventoCadastro from './view/evento-cadastro/';
import EventoDetalhes from './view/evento-detalhes/';
import eventoDetalhes from './view/evento-detalhes/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/eventos/:parametro' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recuperarsenha" component={RecuperarSenha} />
        <Route exact path="/eventocadastro" component={EventoCadastro} />
        <Route exact path="/eventodetalhes" component={eventoDetalhes} />
      </Router>
    </Provider>
  );
}

export default App;
