function validaUserName(str) { 

    //Estabelecer la expresion regular de validad
    /*
        Reglas de E.R; 
        *Iniciar con una letra a-z o A-Z
        *Seguida de una o mas letras o digitos 0-9 o _
        *No terminar en _
    */
    const expRegular = /^[A-Za-z]\w+[A-Za-z0-9]$/;  

    const longitud = (str) => str.length >= 4 && str.length <= 25;       //validar la longitud 4>str<25
    
    return expRegular.test(str) && longitud(str);                        // Si es valido nombre de usuario retorna True
  }
     
  // Ejecutar funcion node validaUserName.js
  let nombreUsuario="Ramon";
  console.log("Nombre insertado: "+nombreUsuario);
  console.log(validaUserName((nombreUsuario)));