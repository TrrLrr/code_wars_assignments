function insertDash(num) {
    var str = '';
     num = num.toString();
       
     for (var i=0; i<num.length; i++){
       var cur;
       var prev;
       parseInt(num[i])%2 == 0 ? cur='even' : cur='odd';
           if (cur=='odd' && prev=='odd'){
               str = str + '-' + num[i];
               var prev ='odd';
           } else {
               str = str + num[i];
               prev = cur;
           }
       }

    }