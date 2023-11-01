import React, { Component } from 'react';

class Asiento extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <p>Este es el asiento N°{this.props.numero}</p>
        )
    }
}

/* const Asiento = (props) => {

    return (
        <p>Este es el asiento N°{props.numero}</p>
    );
}*/

export default Asiento; 