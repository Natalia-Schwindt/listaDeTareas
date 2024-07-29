let nuevaTarea = document.getElementById('nuevaTarea'); //Identifica el contenedor donde se añadirán los elementos.

let labelTítulo = document.createElement('label'); //Crea un elemento label.
labelTítulo.innerText = 'Agregar una nueva tarea'; //Agrega un texto al elemento label.

let inputTarea = document.createElement('input'); //Crea un elemento input.
inputTarea.id = 'inputTarea'; //Agrega un id al input.

let botonTarea = document.createElement('button'); //Crea el botón agregar.
botonTarea.innerText = 'Agregar'; //Agrega el texto al botón.

nuevaTarea.append(labelTítulo); //Agrega el label al contenedor.
nuevaTarea.append(inputTarea); //Agrega el input al contenedor.
nuevaTarea.append(botonTarea); //Agrega el botón al contenedor.

let listaTareas = document.createElement('ul'); //Crea una lista desordenada.
nuevaTarea.append(listaTareas); //Agrega la lista desordenada al contenedor.

//Función para capturar la tarea ingresada por input, y mostrarla en un elemento li, con un botón de eliminar.
const agregarTarea = () => {
    let capturarValue = document.getElementById('inputTarea').value; //Captura el valor del input.

    let itemLista = document.createElement('li'); //Crea un nuevo elemento li.
    itemLista.innerText = capturarValue; //Asigna el valor capturado directamente al elemento li.

    let botonEliminar = document.createElement('button'); //Crea el botón eliminar.
    botonEliminar.innerText = 'Eliminar'; //Agrega el texto al botón.
    botonEliminar.addEventListener('click', () => {
        listaTareas.removeChild(itemLista); //Elimina el elemento de la lista, cuando se hace clic en el botón eliminar.
    });

    itemLista.appendChild(botonEliminar); //Añade el botón eliminar al elemento li.
    listaTareas.appendChild(itemLista); //Añade el elemento li, a la lista desordenada.

    console.log(itemLista.innerText);
    document.getElementById('inputTarea').value = '';//Limpia el input.
}

botonTarea.addEventListener('click', agregarTarea); //Añade el event listener al botón.
