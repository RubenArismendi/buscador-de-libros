//crear los selectores
const autor = document.getElementById('autor');
const categoria = document.getElementById('categoria')
const edicion = document.getElementById('edicion');
const nombre = document.getElementById('nombre')
//obtener datos de busqueda
const datosBusqueda = {
    autor: '',
    categoria:'',
    edicion: '',
    nombre:'',
    isbn:''
}
let isbn
//crear los eventos
document.getElementById("formContent").addEventListener('submit', (e)=>{
    e.preventDefault();//para que no se recarge la pagina 
});
//cargar bd de libros
document.addEventListener('DOMContentLoaded',()=>{
    mostrarLibros(libros);
})

autor.addEventListener('input',e =>{
    datosBusqueda.autor = e.target.value;
    filtrarLibro()
})

categoria.addEventListener('input',e =>{
    datosBusqueda.categoria = e.target.value;
    filtrarLibro()
})

edicion.addEventListener('input',e =>{
    datosBusqueda.edicion = e.target.value;
    filtrarLibro()
})

nombre.addEventListener('input',e =>{
    datosBusqueda.nombre = e.target.value;
    filtrarLibro()
})

boton.addEventListener('click', (e) => {
    const valorDelInput = buscar.value;
    datosBusqueda.isbn = valorDelInput;
    filtrarLibro()
});


//crear las funciones 

function mostrarLibros(libros){
    limpiarHTML()
    const container = document.querySelector('.container')
    libros.forEach(libro=>{
        const libroHTML = document.createElement('div')
        libroHTML.innerHTML=`
        <div class="alert alert-secondary mt-4 " role="alert">
        <h6>${libro.nombre} De ${libro.autor}, Edicion Nro : ${libro.edicion}, Categoria ${libro.categoria}, ISBN(${libro.isbn})</h6>
            </div>
            `
            container.appendChild(libroHTML)
        })

}

function limpiarHTML(){
    const contenedor = document.querySelector('.container');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarLibro(){
    const resultado = libros.filter(filtrarISBN).filter(filtrarNombre).filter(filtrarEdicion).filter(filtrarAutor)//.filter(filtrarCategoria)
    console.log(resultado)

    if (resultado.length){
        mostrarLibros(resultado)
    }else{
        mostrarAlerta()
    }
}

function filtrarNombre(libro){
    if(datosBusqueda.nombre){
        return libro.nombre === datosBusqueda.nombre
    }
    return libro;
}

function filtrarEdicion(libro){
    if(datosBusqueda.edicion){
        return libro.edicion === datosBusqueda.edicion
    }
    return libro;
}

function filtrarAutor(libro){
    if(datosBusqueda.autor){
        return libro.autor === datosBusqueda.autor
    }
    return libro;
}

function filtrarISBN(libro){
    if(datosBusqueda.isbn){
        return libro.isbn == datosBusqueda.isbn
    }
    return libro;
}

function filtrarCategoria(libro){
    if(datosBusqueda.categoria){
        return libro.categoria === datosBusqueda.categoria
    }
    return libro;
}
function mostrarAlerta(){
    limpiarHTML()
    const mostrarAlerta = document.createElement('div')
    mostrarAlerta.innerHTML=`
    <div class="container">
    <div class="alerta " style="margin-top:90px ;">
        <div class="alert alert-danger " role="alert">
        No Encontramos Un Libro Con Esas Caracteristicas.
        </div>
    </div>
    `
    document.querySelector('.container').appendChild(mostrarAlerta)
}