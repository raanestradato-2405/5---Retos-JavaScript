function longString(sen) {
    let resultado = '';
    //Funcion de remplazar
    /*
        *Separaremos cada palabra con el split
        *Recorreremos el arreglo de palabras
        *comparamos el tamaño de cada palabra
        *asignamos a primer palabra a lavariable resultado
        *si la palabra encontrada en el arreglo es mayor a "resultado" se remplaza 
    */
    sen.replace(/[^a-zA-Z ]/gi, '').split(' ').
    forEach(word => word.length > resultado.length ? result = word : null);
    return result;
  }
     
  // MAndar llamarfuncion node longString.js
  var cadena= "Ramon Antonio";
  console.log("Cadena a evaluar: "+cadena);
  console.log("Palabra mas larga:");
  console.log(longString(cadena));