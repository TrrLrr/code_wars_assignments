function formatWords(words){
    if(words == null || !words.length || words == '') {
      return '';
    }
    
    return words.filter(item => item !== '').reduce((acc,cur,item,arr) => (item === arr.length - 1) ? `${acc} and ${cur}` : `${acc}, ${cur}`);
    
  }