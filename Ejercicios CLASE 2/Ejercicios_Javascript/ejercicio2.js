// 2.Encontrar números primos: Escribe una función que tome un número como argumento y
// determine si es un número primo o no. Un número primo es aquel que solo es divisible por 1
// y por sí mismo.

function esPrimo(num) {
    if (num % 2 == 0 || num % 3 == 0) {
        return "NO es primo"
    } else { 
        return "ES primo"
    }
}

console.log(esPrimo(121));