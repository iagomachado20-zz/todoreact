import React from 'react';
// Importa as rotas definidas no projeto
import routesConfig from './routes';
import { Route } from 'react-router-dom';
import { Container } from './styled/elements';

// Prover a Store do Redux para a aplicação
import { Provider } from 'react-redux';

// Retorna a store Redux que será inserida no Provider
import store from './store/index';


// Componente Root da Aplicação
function App() {
  return (
    <Provider store={ store }>
      <Container>
        { routesConfig.map((value, key) => {
          return (
            <Route 
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          )
        })}
      </Container>
    </Provider>  
  );

}

export default App;
