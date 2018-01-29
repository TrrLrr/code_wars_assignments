function mutateMyStrings(stringOne, stringTwo){
    var res = `${stringOne}\n`;
    var one = stringOne.split('');
    var two = stringTwo.split('');
    for (var i = 0; i < stringOne.length; i++) {
      if (one[i]!==two[i]) {
        one[i] = two[i];
        res += `${one.join('')}\n`;
      }
    }
    return res;
  
  }