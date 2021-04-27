function BracketMatcher(str) {
    let parentesis = 0;
  
    for (let i = 0; i < str.length; i++) {  // For recorrer toda la dacena
      if (str[i] === '(') parentesis++;     // Cada que se abre "(" incrementra 1
      if (str[i] === ')') parentesis--;     // Cada que se cierra ")" decrementa 1
      if (parentesis < 0) return 0;         // Si el resultado es distinto de 0 retorna 0
    }
  
    return parentesis ? 0 : 1;             // Si no retorna 1
  }
     
  // Mandar llamar la funcion node bracketMatcher.js
  console.log(BracketMatcher("(Hola)"));