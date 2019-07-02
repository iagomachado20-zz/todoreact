import React from 'react';
import './App.scss';
import Header from './components/header/header';
import routesConfig from './routes';
import { Route } from 'react-router-dom';
import { Container } from './styled/elements';


function App() {
  return (
    <Container>
      <Header title="Lista de Cursos"></Header>

      { routesConfig.map((value, key) => {
        return <Route 
          key={key}
          path={value.path}
          component={value.component}
          exact={value.exact}
        ></Route>
      })}
    </Container>
  );

}

export default App;
