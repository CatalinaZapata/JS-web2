export function valida(input){//reemplaza a llamar al input con el id
     const TipoDeInput = input.dataset.tipo;//dataset ayuda a conectar con todos los datas del html y .tipo te permite especificar a cual
     if (validadores[TipoDeInput]){//ayuda a verificar si cada uno de los input corresponde a los validadores
        validadores[TipoDeInput](input);
     }
}
//Esta función valida vive aquí en validaciones, va a recibir el input, va a verificar cuál es el tipo de input a través de dataset.tipo ..... y a partir de ahí lo que vamos a tener que ir armando, pues bueno, es aquí todo un objeto con los diferentes tipos de input que vamos a tener.

const validadores = {//nombre del tipo con la llave dentro del sujeto  
    nacimiento: input => validarNacimiento(input),
};
//y a partir de ahí lo que vamos a tener que ir armando, pues bueno, es aquí todo un objeto con los diferentes tipos de input que vamos a tener.

function validarNacimiento(input) {//obtiene el valor de la fecha nacimiento y valida o no la mayoria de edad
    const fechaCliente = new Date(input.value);//El operador new permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.
    mayorEdad(fechaCliente);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){//si es falso advierte que se debe ser mayor de edad
        mensaje = "Debes tener al menos 18 años de edad";
    };

    input.setCustomValidity(mensaje);//ayuda a determinar si se cumple la condicion y te deja pasar el filtro sin mensaje alguno
}
  
function mayorEdad(fecha){//determina si el usuario es mayor de edad
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,  
        fecha.getUTCMonth(), 
        fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;//determina si la suma de añonaciUser+18 es menor al año actual (2022) y con ello determina si es <>de edad
 }

 /*//Generar que con la casilla de nacimiento se pueda determinar la mayoria de edad
const inputNacimiento = document.querySelector("#birth");//llama al input de fecha de nacimiento

inputNacimiento.addEventListener("blur", (evento) => {validarNacimiento(evento.target);});
//ayuda a delegar el evento a la función validadNacimiento/Función que indica que ya se lleno el input  *///no es buena práctica enlazar todo a un id



