var scores = {};// Va a llevar el registro de los jugadores
console.log(scores);

function createPlayer(object, name){
  object[name.toLowerCase()] = 0;// crea las keys a el objeto
  console.log(object);
}


function addPoints(name, points){
  scores[name.toLowerCase()] += points;//asigna los valores a las keys del objeto, va sumando el puntaje al jugador
  console.log(scores);
}

function printAllPoints(){
  var arrayPlayers = Object.keys(scores);
  var resultados = '';

  for(var k = 0; k < arrayPlayers.length; k++){
    //resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]] +', ';
    if(k == arrayPlayers.length -1){// se verifica que estemos en la ultima posicion para quitar la coma que esta al final de los elementos
        resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]];
    }else{//si no esta en la utlima posicion pone la coma
        resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]] +', ';
    }
  }
return resultados;
}

createPlayer(scores, 'Ana');
addPoints('ana', 20);
addPoints('ana', 40);
createPlayer(scores, 'Silvana');
addPoints('Silvana',50);
console.log(printAllPoints());
