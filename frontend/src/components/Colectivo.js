import React from 'react'; // const React = require('react');
import Asiento from './Asiento'; // const Asiento = require('./Asiento')

const Colectivo = () => {
    console.log('Esto es un log de colectivo')

    return (
        <div>
            <Asiento />
            <Asiento />
            <Asiento />
            <br />
            <br />
        </div>
    );
}

export default Colectivo;