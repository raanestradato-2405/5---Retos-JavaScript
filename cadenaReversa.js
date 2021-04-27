function cadenaReversa(string) {
    return string.split('').reverse().join('');  // Separa la cadena caracter a caracter e invertimos
  }
     
  // Llamar funcion a ejecutar node cadenaReversa.js
  var cadena="Hola Mundo!!";
  console.log("Cadena introducida: "+cadena);
  console.log("Resultado:");
  console.log(cadenaReversa(cadena));