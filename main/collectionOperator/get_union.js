'use strict';

var get_union=(collection_a, collection_b)=> 
  //在这里写入代
  
  
  collection_a.concat(collection_b.filter(function(v) {return collection_a.indexOf(v) === -1 } ))
    
  


module.exports = get_union;

