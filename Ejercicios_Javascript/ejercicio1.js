// 1-Revertir una cadena: Escribe una función que tome una cadena como argumento y
// devuelva la cadena invertida. Por ejemplo, si la entrada es "JavaScript", la salida debería
// ser "tpircSavaJ".

function dameVuelta (entrada) {
    let nuevaFrase = ""
    for (let i = entrada.length -1; i >= 0; i--) {
        nuevaFrase += entrada.slice(i,i +1)
    }
    return nuevaFrase
}
console.log(dameVuelta("javaSript"));