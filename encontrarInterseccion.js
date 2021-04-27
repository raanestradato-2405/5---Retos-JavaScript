function encontrarInterseccion(strArr) { 

    // code goes here  
    
      let nuevoarreglo = [];
    let elemento1 = strArr[0].split(', ');
    let elemento2 = strArr[1].split(', ');
    
  
    // Recorrer el arreglo eintroducir en nuevo arreglo los 
    // elementos coincidentes en ambos secciones delarreglo

    for(let i = 0; i < elemento1.length; i++ ) {
      if (elemento2.includes(elemento1[i])) {
        nuevoarreglo.push(elemento1[i]);
      }
    }

    // Si el nuevo arreglo es de tamaño 0 retornar falso de 0 coincidencias
  if (nuevoarreglo.length === 0) {
    return false;
  } 

    // Si noretornar el nuevo arreglo resultante de la interseccion
  else {
    return nuevoarreglo.toString();
  }

  }
     
  //Mandar llamar la funcion
  var arreglo = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
  console.log("Conjuntos a comparar: \n"+arreglo[0]+"\n"+arreglo[1]);
  console.log("Intercción de Elementos:");
  console.log(encontrarInterseccion(arreglo));