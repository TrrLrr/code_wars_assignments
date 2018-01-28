// reverse the letters in the sentence
function reverser(sentence) {
    let arr = sentence.split(' ');
    let newArr = [];
    for(var i = 0; i < arr.length; i++) {
      let str = [];
      for(var j = arr[i].length -1; j >= 0; j--) {
        str.push(arr[i][j]);
      }
      newArr.push(str.join(''));
    }
    return newArr.join(' ');
  }
      