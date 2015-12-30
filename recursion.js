function range(start, end) {
  if (start > end) { return []; }
  else if (start === end) { return [start]; }
  else {
    return range(start, end-1).concat([end]);
  }

}
console.log(range(1,3));

function recSum(array) {
  if (array.length === 1) { return array[0]; }
  else if (array.length === 0) { return 0; }
  else {
    return recSum(array.slice(1)) + array[0];
  }
}

console.log(recSum([1,2,3,4,5,6,7,8,9,10]));

function exponent(b, n) {
  switch(n) {
    case 0:
      return 1;
      break;
    default:
      return b * exponent(b, n-1);
      break;
    }
  }

console.log(exponent(2,5));

function exp(b, n) {
  if (n === 0) { return 1; }
  else if (n === 1) { return b; }
  else {
    if (n % 2 === 0) { return exp(b, n/2) * exp(b, n/2); }
    else { return b * exp(b, (n-1)/2) * exp(b, (n-1)/2); }
  }
}

console.log(exp(2, 10));

function fibIter(n) {
  var fibs = [0, 1];
  if (n === 1) { return [0];  }
  else if (n === 2) { return fibs; }
  else {
    while (fibs.length !== n) {
      fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    }
  }
  return fibs;
}

function recFib(n) {
  if (n === 1) { return [0]; }
  else if (n == 2) { return [0, 1]; }
  else {
    var prev = recFib(n-1);
    prev.push(prev[prev.length-1] + prev[prev.length-2]);
    return prev;
  }
}

console.log(recFib(10));

function binarySearch(array, num) {
  var middle = Math.floor((array.length)/2);
  if (array[middle] === num) { return middle; }
  else if (array[middle] > num) { return binarySearch(array.slice(0, middle), num); }
  else if (array[middle] < num) { return middle + 1 + binarySearch(array.slice(middle+1), num); }
  return "not here";
}

var test = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 21);
console.log(test);

function makeChange1(amount, coins) {
  var change = [];
  var sortCoins = coins.sort(function(a,b) {return a - b; }).reverse();
  var firstCoin = sortCoins[0];
  var count = Math.floor(amount/firstCoin);
  for (var times = count; times > 0; times--) { change.push(firstCoin); }

  amount = amount - (firstCoin * count);
  if (amount > 0) {
    change = change.concat(makeChange1(amount, sortCoins.slice(1)));
  }

  return change;
}

console.log(makeChange1(99, [25, 10, 5, 1]));


function makeChange2(amount, coins) {
  if (amount === 0) { return []; }
  var bestChange = undefined;
  for (var i = 0; i < coins.length; i++) {
    if (coins[i] > amount) { continue; }

    var changeForRest = makeChange2(amount - coins[i], coins)
    var change = [coins[i]].concat(changeForRest);

    if (bestChange === undefined || change.length < bestChange.length) {
      bestChange = change;
    }
  }
  return bestChange;
}

console.log(makeChange2(14, [10, 7, 1]));

function merge(arr1, arr2, arr3) {
  var i1 = 0;
  var i2 = 0;
  var i3 = 0;
  var n1 = arr1.length;
  var n2 = arr2.length;
  while (i1 < n1 && i2 < n2) {
    if (arr1[i1] < arr2[i2]) {
      arr3[i3] = arr1[i1];
      i1 += 1;
    }
    else {
      arr3[i3] = arr2[i2];
      i2 += 1;
    }
    i3 += 1;
  }
  // get remaining elements from arr1, if any
  while (i1 < n1) {
    arr3[i3] = arr1[i1];
    i1 += 1;
    i3 += 1;
  }
  while (i2 < n2) {
    arr3[i3] = arr2[i2];
    i2 += 1;
    i3 += 1;
  }
  return arr3;
}

function mergeSort(arr) {
  var n = arr.length;
  if (n > 1) {
    var middle = Math.floor(n/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
}

console.log(mergeSort([10,9,4,6,3,1,9,2,5]));

function subsets(arr) {
  if (arr.length === 0) { return [[]]; }
  else {
    var val = arr.shift();
    var subsetsPrev = subsets(arr);
    var arr = [];
    for (i = 0; i < subsetsPrev.length; i++) {
      var foo = subsetsPrev[i].concat([val]);
      arr.push(foo);
    }
    return subsetsPrev.concat(arr);
  }
}

console.log(subsets([1,2,3]));
