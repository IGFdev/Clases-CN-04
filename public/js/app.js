//alert('Hola mundo!');
/* const rta = confirm('Te gusta el helado?');

if(rta){
    alert('Qué bueno que te guste!');
} else {
    //window.location.replace('https://heladería.com');
    alert('No sos humano');
} */

/* let edad = Number(prompt('Cuántos años tienes?'));

console.log(edad); */


const titulo = document.getElementById('titulo'); // Agarramos un solo elemento por ID

let h3 = Array.from(document.getElementsByTagName('h3')); // Agarramos todos los elementos que sean etiquetas h3

const imgs = Array.from(document.getElementsByClassName('product_img')); // Agarramos todos los elementos que tengan la clase product_img

const imgs2 = Array.from(document.querySelectorAll('#titulo'));

const logo = document.querySelector('#logo');


/* const respuesta = confirm('Quieres cambiar el logo?');

if(respuesta){
    logo.src = 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg';
} */

titulo.innerHTML += ' Contenido modificado!!!!';

document.querySelector('article').innerHTML += `<img src="images/logo-mercado-liebre.svg" />`;

titulo.style.color = 'red';

document.querySelector('body').style.backgroundColor = 'grey';

/* const verArticulos = confirm('Quieres ver los artículos?');

if(!verArticulos) {
    // Obtenemos array de artículos
} */
const articles = Array.from(document.querySelectorAll('article'));

// Para cada artículo, le ponemos display none (desaparece)
articles.forEach(article => article.style.display = 'none');

console.log(titulo.classList.contains('titular'));

titulo.classList.add('titular');

console.log(titulo.classList.contains('titular'));

titulo.classList.add('juancito');
titulo.classList.remove('titular');

titulo.classList.toggle('juancito');