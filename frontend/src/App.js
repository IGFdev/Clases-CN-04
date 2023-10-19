import logo from './logo.svg';
import './App.css';
import Colectivo from './components/Colectivo';

function App() {
  // JSX
  const numeros = [1,2,3,4,5];

  const persona = {
    asdf: 'asdf'
  }



  return (
    <div>
      
      <h1>{persona.asdf}</h1>
      <Colectivo />
    </div>
  );
}

// module.exports = App;
export default App;
