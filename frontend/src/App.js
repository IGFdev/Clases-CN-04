import UserCard from './components/UserCard';
import Colectivo from './components/Colectivo'; //const Colectivo = require('./components/Colectivo');

function App() {
  // JSX
  const users = [
    {
      nombre: 'Belab',
      apellido: 'Saintejour',
      edad: 21
    },
    {
      nombre: 'Bruno',
      apellido: 'Ciotola',
      edad: 22
    },
    {
      nombre: 'Rocío',
      apellido: 'Carle',
      edad: 90
    }
  ];

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <div>
      <button id='boton' onClick={handleClick}>Soy un botón</button>

      {
        users.map((user, index) => (
          <UserCard
            nombre={user.nombre}
            apellido={user.apellido}
            edad={user.edad}
            key={index} //Esta prop no la podemos usar. La tenemos que poner siempre que hagamos un map
          />
        ))
      }
    </div>
  );
}

// module.exports = App;
export default App;
