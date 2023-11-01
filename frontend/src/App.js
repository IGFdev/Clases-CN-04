import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import Faq from './components/views/Faq';
import Navbar from './components/Navbar';
import ProductList from './components/views/ProductList';
import ProductDetail from './components/views/ProductDetail'

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/about" exact={true} component={About} />

          <Route path="/faq" exact={true} component={Faq} />
          
          <Route path="/products" exact={true} component={ProductList}/>

          <Route path="/products/:id/detail" exact={true} component={ProductDetail} />
        </Switch>
      </>
    )
  }
}

/* 
  - 1° en index.js rodear App de BrowserRouter
  - 2° en App.js instanciar el switch
  - 3° dentro del Switch ponemos cada Route que tengamos
    Props de cada Route:
      - Path -> Ruta
      - Component -> Solo ponemos el nombre del componente que queramos renderizar en esa ruta
      - Exact* -> Sirve para que las rutas no se choquen
  - 4° utilizar Link para redirigir entre rutas sin recargar la página
*/

export default App;
