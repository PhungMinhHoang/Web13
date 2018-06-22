'use strict'

function search(input, target) {
  var l = 0;
  var r = input.length-1;
  if(target==null) return -1;
  while (l < r) {
    var m = Math.floor((l + r) / 2);
    if (input[m] == target) return m;
    else if (input[m] > target) r = m - 1;
    else l = m + 1;
  }
  if(input[l]==target) return l;
  else return -1;
}

module.exports = search
