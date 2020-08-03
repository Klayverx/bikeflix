import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(

  // rotas dos navegadores
  <BrowserRouter>

    {/* As possíveis entradas */}
    <Switch>
      {/* rotas possuem prioridade por ordem listada no código quando coloca-se (exact) */}
      <Route path="/" component={Home} exact />

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      {/* a última rota sem o "path" é sempre carregada caso nao caia em nenhuma outra */}
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
