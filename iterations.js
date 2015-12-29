function factors(n) {
  console.log(1);
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  console.log(n);
}
console.log(factors(10));

function bubbleSort(array) {

  var sorted = true;
  while (sorted) {
    sorted = false;
    for (i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        sorted = true
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,2,4,5,2,8,1,9,10]));

function substrings(word) {
  var result = [];
  for (var i = 0; i < word.length; i++) {
    for (var j = i+1; j < word.length+1; j++) {
      result.push(word.slice(i, j));

    }
  }
  return result;
}

console.log(substrings("cat"));
