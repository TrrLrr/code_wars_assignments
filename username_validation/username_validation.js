//first solution
//##################################################################

function validateUsr(username) {
    var res;
    
    if(username.length >= 17 || username.length <= 3) {
      res = false;
    } else {
      res = /^[a-z0-9_]+$/.test(username);
    }
    
    return res
  }

  //refactor
  //###########################################################

  function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
  }

  