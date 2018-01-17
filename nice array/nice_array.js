function isNice(arr){
    var nice = false;
    for(var i = 0; i < arr.length; i++) {
       for(var j = 0; j < arr.length; j++) {
         if(arr[i] +1 === arr[j]|| arr[i] -1 === arr[j]) {
           nice = true;
           break;
         } else if(j === arr.length -1) {
           return false;
      
           
         }
       }
     }
      
    return nice;
  }