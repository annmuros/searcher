//Variables
const resultado = document.querySelector('#resultado');


//eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();
})


//funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;//Destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent= `${marca} ${modelo} - ${puertas} Puertas - Transmisión: ${transmision}`;

        //insertar en el html
        resultado.appendChild(autoHTML)
})

}