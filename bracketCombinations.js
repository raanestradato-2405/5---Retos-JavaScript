//Formula de combinaciones: (2n!) / (n+1)! n!

function BracketCombinations(num) { 
    
    //Calculo de numero factorial k
    let factorial = (n) => {
      let k = 1;
      for(var i = n; i >= 1; i--){
        k *= i;
      }
      return k;
    }
    // formula going down
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    return result; 
  }
     


    //Linea de ejecucion "node node bracketCombinations.js"
    console.log(BracketCombinations(3));