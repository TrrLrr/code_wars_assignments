//Replace all dots
//#################################################################

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

//Abbreviate two word name
//#################################################################

function abbrevName(name){

  var names = name.split(' ');

  return names[0].charAt(0).toUpperCase() + '.' + names[1].charAt(0).toUpperCase();

}
