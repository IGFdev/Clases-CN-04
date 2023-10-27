import React, { Component } from 'react';

class Valor extends Component {
    constructor(props) {
        super(props);
    } 

    componentDidMount(){
        console.log('El componente se montó!');
    }

    componentDidUpdate(){
        console.log('El componente se actualizó!');
    }

    componentWillUnmount(){
        console.log('Adiós vaquero!');
    }

    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
} 

export default Valor;