// 2.Encontrar números primos: Escribe una función que tome un número como argumento y
// determine si es un número primo o no. Un número primo es aquel que solo es divisible por 1
// y por sí mismo.

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

console.log(esPrimo(7));