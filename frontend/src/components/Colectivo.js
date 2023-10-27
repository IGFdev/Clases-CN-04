import React, { Component } from 'react';
import Asiento from './Asiento';

class Colectivo extends Component {
    render() {
        return (
            <div>
                <Asiento
                    numero={1}
                />
                <Asiento
                    numero={2}
                />
                <Asiento
                    numero={3}
                />
            </div>
        )
    }
}

export default Colectivo;

/* const Colectivo = () => {
    console.log('Esto es un log de colectivo')

    return (
        <div>
            <Asiento
                numero={1}
            />
            <Asiento
                numero={2}
            />
            <Asiento
                numero={3}
            />
        </div>
    );
}

export default Colectivo; */