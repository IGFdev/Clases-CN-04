function sumar(a, b){
    if(a && b){
        return a + b;
    } 

    throw new Error('Los parámetros no son válidos');
}

try {
    const resultado = sumar(5);

    console.log(resultado);
} catch (error) {
    console.log(error);
}