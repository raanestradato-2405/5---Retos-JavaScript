function marcaPreguntas(str) { 
    let resultado = false;

    for(let i=0; i<str.length; i++){                    //Ciclo para recorrer toda la cadena
        for(let j=i+1; j<str.length; j++){              //Ciclo anidado para identificar el siguiente elemento de la cadena
            if(Number(str[i]) + Number(str[j])=== 10){  // Sumanos numero de la posicion i + el siguiente numero encontrado en la cadena
                resultado = true;                             // Si la suma es igual a 10 resultado es verddero
                if(str.slice(i,j).split("?").length -1 < 3){    // Si la cantidad de "?" no es 3 entonces el resultado es falso
                    return false;
                }
            }
        }
    }
    return resultado;                                         //retornar resultado
}
   
// keep this function call here 
var cadena="acc?7??sss?3rr1??????5";
console.log("Cadena a evaluar: "+ cadena);
console.log("Resultado (Verdsdero/Falso): ");
console.log(marcaPreguntas(cadena));