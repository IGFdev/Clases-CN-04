//  1- declarar componente de clase

/* import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        return (
            <h1>Soy un componente de clase</h1>
        )
    }
} */

// 2- Usar props en componente de clase

/*
class MiComponente extends Component {
    constructor(props) {
        super(props);
    } 

    render(){
        return (
            <h1>{this.props.miProp}</h1>
        )
    }
}
*/

// 3- Eventos de click (funciona para cualquier evento)

/*
class MiComponente extends Component {
    saludar = () => {
        console.log('Hola!');
    }

    render(){
        return (
            <button onClick={() => saludar()}>Saludar!</button>
        )
    }
}
*/

// 4- Declarar variable de state

/*
class MiComponente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            miVariableDeState: 123
        }
    } 

    render(){
        return (
            <h1>{this.state.miVariableDeState}</h1>
        )
    }
}
*/

// 5- Modificar una variable de state

/*
class MiComponente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            miVariableDeState: 123
        }
    } 

    saludar = () => {
        this.setState({
            miVariableDeState: this.state.miVariableDeState + 1;
        })
    }

    render(){
        return (
            <button onClick={() => saludar()}>sumar!</button>
        )
    }
}
*/

// 6- Ejecutar código cuando el componente se monte (Acá es donde fetcheamos)
/* componentDidMount(){
    console.log('El componente se montó!');
} */

// 7- Ejecutar código cuando el componente se actualice (cambio en el state o rerenderización)
/* componentDidUpdate(){
    console.log('El componente se actualizó!');
} */

// 8- Ejecutar código cuando el componente se vaya a desmontar
/* componentWillUnmount(){
    console.log('Adiós vaquero!');
} */