import React, { Component } from "react";
import Valor from "./Valor";

class Contador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.valorInicial,
            otraVariable: 'asdfas'
        }
    }

    // Todo lo que queremos que se actualice la pantalla cuando su valor cambie, lo ponemos en state

    aumentar() {
        // En vez de cambiar a mano la propiedad value de this.state, la función this.setState se va a encaragar de hacerlo por nosotros;

        this.setState({
            value: this.state.value + 1
        });
    }

    decrementar() {
        this.setState({
            value: this.state.value - 1
        });
    }

    /* 
        1- Cuando el componente es creado
        2- Cuando su state cambie
    */



    render() {
        return (
            <>
                <h1>El valor inicial es: {this.props.valorInicial}</h1>
                <button onClick={() => this.aumentar()}>+</button>
                {
                    /* Bajo la condición de que el value de state no sea 0, muestro el componente Valor */
                    this.state.value !== 0 ?
                        <Valor
                            value={this.state.value}
                        />
                        :
                        <h1>El valor es nulo</h1>
                }

                {
                    this.state.value > 0 &&
                    <button onClick={() => this.decrementar()}>-</button>
                }
            </>
        )
    }
}

export default Contador;