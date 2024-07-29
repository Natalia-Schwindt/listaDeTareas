let nuevaTarea = document.getElementById('nuevaTarea'); //Identifica el contenedor donde se añadirán los elementos.

let labelTítulo = document.createElement('label'); //Crea un elemento label.
labelTítulo.innerText = 'Agregar una nueva tarea'; //Agrega un texto al elemento label.

let inputTarea = document.createElement('input'); //Crea un elemento input.
inputTarea.id = 'inputTarea'; //Agrega un id al input.

let botonTarea = document.createElement('button'); //Crea el botón agregar.
botonTarea.innerText = 'Agregar'; //Agrega el texto al botón.

let listaTareas = document.createElement('ul'); //Crea una lista desordenada.

nuevaTarea.append(labelTítulo); //Agrega el label al contenedor.
nuevaTarea.append(inputTarea); //Agrega el input al contenedor.
nuevaTarea.append(botonTarea); //Agrega el botón al contenedor.
nuevaTarea.append(listaTareas); //Agrega la lista desordenada al contenedor.

//Función para capturar la tarea ingresada por input, y mostrarla en un elemento li, con un botón de eliminar.
const agregarTarea = () => {
    let capturarValue = document.getElementById('inputTarea').value; //Captura el valor del input.

    let itemLista = document.createElement('li'); //Crea un nuevo elemento li.
    itemLista.innerText = capturarValue; //Asigna el valor capturado del input, al elemento li.

    let botonEditar = document.createElement('button'); //Crea el botón editar.
    botonEditar.innerText = 'Editar'; //Agrega el texto al botón.
    botonEditar.addEventListener('click', () => {
        let nuevoTextoTarea = prompt('Edita el texto de la tarea:', capturarValue);
        if (nuevoTextoTarea !== null) { //Verifica si el usuario cancela la edición.
            itemLista.innerText = nuevoTextoTarea; //Actualiza el texto del elemento li con el nuevo valor.
            itemLista.append(botonEditar); //Vuelve a añadir el botón editar al li.
            itemLista.append(botonEliminar); //Vuelve a añadir el botón eliminar al li.
            itemLista.append(checkList); //Vuelve a añadir el checkbox al elemento li.
        }
    });

    let botonEliminar = document.createElement('button'); //Crea el botón eliminar.
    botonEliminar.innerText = 'Eliminar'; //Agrega el texto al botón.
    botonEliminar.addEventListener('click', () => {
        listaTareas.removeChild(itemLista); //Elimina el elemento de la lista, cuando se hace clic en el botón eliminar.
    });

    let checkList = document.createElement('input');
    checkList.type = 'checkbox';

    itemLista.append(botonEditar); //Añade el botón editar al elemento li.
    itemLista.append(botonEliminar); //Añade el botón eliminar al elemento li.
    itemLista.append(checkList); // Añade el checkbox al elemento li.
    listaTareas.append(itemLista); //Añade el elemento li, a la lista desordenada.

    document.getElementById('inputTarea').value = ''; //Limpia el input.
}

botonTarea.addEventListener('click', agregarTarea); //Añade el event listener al botón.