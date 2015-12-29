function unique(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function twoSum(arr) {
  var result = [];
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        var pair = [i, j];
        result.push(pair);
      }
    }
  }
  return result;
}

function transpose(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var col = [];
    for (var j = 0; j < arr.length; j++) {
      col.push(arr[j][i]);
    }
    result.push(col);
  }
  return result;
}

var test = transpose([[1,2,3],[4,5,6],[7,8,9]]);
console.log(test);
