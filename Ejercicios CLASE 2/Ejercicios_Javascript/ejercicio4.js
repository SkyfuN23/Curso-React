// 4.Encontrar el número más grande: Escribe una función que tome un array de números
// como argumento y devuelva el número más grande en el array.

function mayorNum(arrayDeNumeros) {
    
    let numGrande = arrayDeNumeros[0];

  for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > numGrande) {
      numGrande = arrayDeNumeros[i];
    }
  }

  return numGrande;
}

const numeros = [3, 16, 100, 99, 66, 45];
console.log(mayorNum(numeros));
