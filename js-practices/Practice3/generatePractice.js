'use strict'
function generate(testLengthArray){
  var test = [] ;
  
  for (var i = 0; i < testLengthArray.length; i++){
  
    var input = []; //generate input
    for (var j = 0; j < testLengthArray[i]; j++){
      input[j] = Math.floor(Math.random() * 20000) - 10000;
    }
    
    var target; //generate target
    if(testLengthArray.length > 3){
      if(i == 0){
        target = 999999;
      }
      else if(i == 1){
        target = input[0];
      }
      else if(i == 2){
        target = input[testLengthArray[2]-1];
      }
      else{
        target = Math.floor(Math.random() * 20000) - 10000;
      }
    }
    else{
      target = Math.floor(Math.random() * 20000) - 10000;
    }

    var output;
    output = input.indexOf(target);
    test[i] = {"input" : input, "target": target, "output": output};
  }
  
  return test;
}


module.exports = generate
