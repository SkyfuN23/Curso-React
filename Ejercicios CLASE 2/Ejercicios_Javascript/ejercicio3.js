// 3.Contar letras y números: Escribe una función que tome una cadena como argumento y
// cuente cuántas letras y números contiene. Por ejemplo, para la entrada "H3ll0 W0rld", la
// función debería devolver un objeto con las propiedades letras igual a 7 y números igual a 4.

function contar(cadena) {
    let letras = 0;
    let numeros = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
  
      if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
        letras++;
      }
  
      if (caracter >= '0' && caracter <= '9') {
        numeros++;
      }
    }
  
    return { letras, numeros };
  }
  
  const resultado = contar("H3ll0 W0rld");
  console.log(resultado);