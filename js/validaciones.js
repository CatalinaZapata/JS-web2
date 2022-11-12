export function valida(input){//reemplaza a llamar al input con el id
     const TipoDeInput = input.dataset.tipo;//dataset ayuda a conectar con todos los datas del html y .tipo te permite especificar a cual
     if (validadores[TipoDeInput]){//ayuda a verificar si cada uno de los input corresponde a los validadores
        validadores[TipoDeInput](input);
     }
    
    if(input.validity.valid){//ayuda a que se coloree la casilla cuando no se completa bien
        input.parentElement.classList.remove("input-container--invalid");//si es true la quita
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else{
        input.parentElement.classList.add("input-container--invalid");//si es false la grega
        input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
    }
}
//Esta función valida vive aquí en validaciones, va a recibir el input, va a verificar cuál es el tipo de input a través de dataset.tipo ..... y a partir de ahí lo que vamos a tener que ir armando, pues bueno, es aquí todo un objeto con los diferentes tipos de input que vamos a tener.

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    nacimiento: {
      valueMissing: "Este campo no puede estar vacío",
      customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
      valueMissing: "El campo no puede estar vacío",
      patternMismatch:"El formato requerido es XXXXXXXXXX 10 números",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
      },
      ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
      },
      estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
      },
  };

const validadores = {//nombre del tipo con la llave dentro del sujeto  
    nacimiento: input => validarNacimiento(input),
};
//y a partir de ahí lo que vamos a tener que ir armando, pues bueno, es aquí todo un objeto con los diferentes tipos de input que vamos a tener.

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
         console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }

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



