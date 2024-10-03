const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];



cargarEvenlisteners();

function cargarEvenlisteners(){
    //Cuando agregas un curso presionando "Agregar carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar Carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = []; //reseteamos el arreglo
        limpiarHTML();//eliminamos todo el html
    })
}


//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){//se asegurar que estes dando click en el boton agregar-carrito
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerdatosCursos(cursoSeleccionado);
    }
};

//eliminar cursos
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //Elimina el arrlego por dataid
        articulosCarrito = articulosCarrito.filter( curso => curso.id !==cursoId)

        carritoHTML();//iterar sobre el carrito y mostar su HTML
    }
}


//Lee el cotenido del HTML al que le dimos click y extrae la informacion 
function leerdatosCursos(curso){
      //crear un obejto con el contenido actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo :curso.querySelector('h4').textContent,
        precio :curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad :1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe =articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna obejto actualizado
            }else{
                return curso; //retorna objetos no duplicados
            }
        })
        articulosCarrito = [...cursos];
    }else{
        //Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


   

    console.log(articulosCarrito);

    carritoHTML();
}    

//Muestra el carrito de compras en el HTML
function carritoHTML() {
    //limpiar el HTML
    limpiarHTML();


    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>

        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

}


//Elimina los cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    //forma lenta usar - contenedorCarrito.innerHTML = '';
}