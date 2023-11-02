import React, { useState, useEffect } from "react";

export default function Contador(props) {
    const [contador, setContador] = useState(props.valorInicial);
    const [contador2, setContador2] = useState(props.valorInicial - 1);
    
    function sumar(){
        setContador(contador + 1);
        setContador2(contador2 + 1);
    }
    
    function restar(){
        setContador(contador - 1);
    }

    console.log('adsffd');

    /* useEffect(() => {
        console.log('Sin array');
    }); // Cuando no pasamos array, la función callback del useEffect se ejecuta siempre que el componente sea renderizado. Se ejecuta cada vez que el componente cambie su state
 */
    useEffect(() => {
        console.log('Array vacío');
    }, []); // Cuando pasamos el array vacío, el cb se ejecuta solo cuando el componente es montado. Cualquier fetch que queramos hacer, lo vamos a ejecutar aquí.
    
    useEffect(() => {
        console.log('Array completo');
    }, [contador2, contador]); // Cuando cambia el valor de la variable de state que pasemos en el array, se ejecuta el cb.

    
    return (
        <>
            <h1>El valor inicial es: {props.valorInicial}</h1>
            <button onClick={sumar}>+</button>
            <h1>{contador}</h1>
            <button onClick={restar}>-</button>
        </>
    )
}