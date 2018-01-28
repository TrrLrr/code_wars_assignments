function cubeOdd(arr) {
    console.log(arr);
  
    for(var i = 0; i < arr.length; i++) {
      if(typeof(arr[i]) !== 'number') {
        return undefined;
      }
    }
  
    return arr.filter(i => i%2).map(i => Math.pow(i,3)).reduce((a,b) => a+b, 0);
  
  
  
  }