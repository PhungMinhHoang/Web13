'use strict'

function sort(input) {
    for(var i = 0; i < input.length - 1; i++){
        for(var j = i + 1; j < input.length; j++){
            if(input[i] > input[j]){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
}

module.exports = sort
