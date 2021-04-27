function primerFactorial(num) {
    var factorial = 1;                      //declaramos valor inicial
    for (var i = 1; i <= num; i++) {
      factorial = factorial* i;             // generamos una multiplicacion consecutiva desde 1 hasta num 
    }
    return factorial;                       // Retornar factorial
  }
     
  // MAndamos llamar Funcion node primerFactorial.js
  var numero=8;
  console.log("Numero introducido: "+numero);
  console.log("Factorial ("+numero+"!)");
  console.log(primerFactorial(numero));