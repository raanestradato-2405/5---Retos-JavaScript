function MinWindowSubstring(strArr){
  var min = null;
  var n = strArr[0];
  var k = strArr[1];
  for (var i = 0; i < n.length; i++) {
    for (var j = i + 1; j <= n.length; j++) {
      var subcadena = n.slice(i, j);
      if(checkK(subcadena, k)){
        if (min === null || subcadena.length < min.length){
          min = subcadena;
        }
      }
    }
  }
  return min;
}

function checkK(subcadena, k){
  var h = k.split('');
  for (var i = 0; i < subcadena.length; i++) {
    var char = subcadena[i];
    var index = h.indexOf(char);
    if(index > -1){
      h.splice(index, 1);
    }
  }
  if(h.length === 0){
    return true;
  } else {
    return false;
  }
}
   
// Ejecutar: node subcadenas.js
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));