import React from 'react'; // const React = require('react');
import Asiento from './Asiento'; // const Asiento = require('./Asiento')

const Colectivo = () => {
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

export default Colectivo;