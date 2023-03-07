//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max -10;

// console.log(max);
// console.log(min);

//Generar el objeto
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',

}

//eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos);//muestra automobiles

    //llena las opciones de años
    llenarSelect();

})

//Event listener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();

});
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value); //convierto los strings en números
     // Mandar llamar la función de filtrar Autos
    filtrarAuto();


});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();

});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
    

});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value); //convierto los strings en números
    //console.log(datosBusqueda);
    filtrarAuto();
   

});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
    

});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
    

});


//funciones
function mostrarAutos(autos){
    limpiarHTML();//elimina el HTML previo
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;//Destructuring
        const autoHTML = document.createElement('p');

        autoHTML.innerHTML = `
        <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;

        //insertar en el html
        resultado.appendChild(autoHTML)
    })

}
//Genera los años del select
function llenarSelect (){
    for (let i = max; i >= min; i--) { //corre hacia atrás del 2023-2013
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega opciones de año al select, no borra el código previo
    }
}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);

    }

}


//funcion que filtra en función de la búsqueda FUNCIÓN DEL ALTO NIVEL

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log (resultado);
    mostrarAutos(resultado);

    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado)
}

function filtrarMarca (auto) {
    const {marca} = datosBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear (auto) {
    const {year} = datosBusqueda;
   
    if (year){
        return auto.year === year;
    }
    return auto;

}

function filtrarMinimo (auto) {
    const {minimo} = datosBusqueda;
    if (minimo){
        return auto.precio >= minimo;
    }
    return auto;

}


function filtrarMaximo (auto) {
    const {maximo} = datosBusqueda;
    if (maximo){
        return auto.precio <= maximo;
    }
    return auto;

}

function filtrarPuertas (auto) {
    const {puertas} = datosBusqueda;
   
    if (puertas){
        return auto.puertas === puertas;
    }
    return auto;

}

function filtrarTransmision (auto) {
    const {transmision} = datosBusqueda;
   
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto;

}

function filtrarColor (auto) {
    const {color} = datosBusqueda;
   
    if (color){
        return auto.color === color;
    }
    return auto;

}