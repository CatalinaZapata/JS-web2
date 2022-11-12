import { valida } from "./validaciones.js";//Muy bien, ya tenemos entonces aquí nuestra función de valida. Ahora lo que nosotros necesitamos es agregar el addEventListener que va a mandar a llamar esta función cada vez que el input sufra el cambio o tenga el cambio de blur, cada vez que salga el usuario de ese input.

const inputs = document.querySelectorAll("input");//selecciona todos los inputs

inputs.forEach ((input) => {//le agrega a todos los inputs los addeventlistener del blur
    input.addEventListener("blur", (input) => {
    valida(input.target);//cuando salga  amndara a llamar esta funcion
    });
});


// Después, inputs. Yo cuando digo document.querySelectorAll lo que me va a regresar es un arreglo. Y como recuerdas, los arreglos los podemos iterar, lo cual voy a hacer aquí. Lo que vamos a recibir aquí es nuestro input, y lo que voy a hacer entonces es para cada uno de los inputs vamos a obtener input, lo que vamos a tener entonces es a nuestro input.addEventListener le vamos a decir cuál es el tipo de evento que queremos escuchar.