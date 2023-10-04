window.addEventListener('load', () => {
    const emailInput = document.querySelector('#email');
    const pwInput = document.querySelector('#password');
    const pwSecurity = document.querySelector('#pw-security');
    const registerForm = document.querySelector('#register-form');

    let hayError = true;

    pwSecurity.innerHTML = 'La contraseña es: débil';

    emailInput.addEventListener('change', e => {
        console.log(`El nuevo valor del input es: ${e.target.value}`);
    });

    emailInput.addEventListener('input', e => {
        console.log(e);
    });

    pwInput.addEventListener('input', e => {
        const longitud = e.target.value.length;

        hayError = false;

        if(longitud < 5){
            pwSecurity.innerHTML = 'La contraseña es: débil';
        } else if(longitud < 8){
            pwSecurity.innerHTML = 'La contraseña es: aceptable';
        } else {
            pwSecurity.innerHTML = 'La contraseña es: segura';
        }
    });

    pwInput.addEventListener('focus', e => {
        e.target.style.backgroundColor = 'red';
        console.log('Se focuseó el inp');
    });

    pwInput.addEventListener('blur', e => {
        e.target.style.backgroundColor = '';
        console.log('Se desfocuseó el inp');
    });

    const checkbox = document.querySelector('#ver-pw');

    let clickeado = false;

    checkbox.addEventListener('click', e => {
        clickeado = !clickeado;

        if(clickeado) {
            pwInput.type = 'text';  
        } else {
            pwInput.type = 'password';  
        }
    });

    registerForm.addEventListener('submit', e => {
        // si el valor del input del mail es menor a 10
        // O si el valor del input de la pw es menor a 8

        if(e.target.email.value.length < 10 || e.target.password.value.length < 8){
            // Se previene el comportamiento por defecto del form
            // (ejecutar el post a /users/register)
            e.preventDefault();
        }
    });
});