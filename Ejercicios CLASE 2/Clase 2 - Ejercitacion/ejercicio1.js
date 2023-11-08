// Tengo desarrollada la siguiente función en javascript
// function suma (a,b,callback){
// let c = a +b;
// callback();
// }
// ¿Que es el tercer parámetro recibido?
// ¿En que casos es obligatorio desarrollar este tipo de funciones?
// Realizar un llamado a la función de ejemplo.

function suma (a,b,callback){
    let c = a +b;
    callback(c);
    }

    // El parametro callback es una funcion que se pasa como argumento y se va a ejecutar una vez que se complete la suma
    // Se utilizan estas funciones para ejecutar codigo luego de que se complete una operacion. Para hacer operaciones asincronas.

function mostrarResultado (resultado) {
    console.log(`El resultado es ${resultado}`);
}

suma(10, 5, mostrarResultado)