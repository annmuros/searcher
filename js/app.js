//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max -10;

// console.log(max);
// console.log(min);

//eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();//muestra automobiles

    //llena las opciones de años
    llenarSelect();

})


//funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;//Destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent= `${marca} ${modelo} - ${puertas} Puertas - Transmisión: ${transmision} - Color: ${color}`;

        //insertar en el html
        resultado.appendChild(autoHTML)
})

}
//Genera los años del select
function llenarSelect (){
    for (let i = max; i>=min; i--) { //corre hacia atrás del 2023-2013
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega opciones de año al select
    }
}
       