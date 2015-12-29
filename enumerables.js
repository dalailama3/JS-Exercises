Array.prototype.double_array = function() {
  var doubles = [];
  for (i = 0; i < this.length; i++) {
    doubles.push(this[i] * 2);
  }
  return doubles;
};
var test = [1,2,3].double_array();
console.log(test);


Array.prototype.myEach = function(fun) {
  for (i = 0; i < this.length; i++) {
    fun(this[i]);
  }
  return this;
};

var test = [4,5,6].myEach(function (num) {
  console.log("Hello " + num);
});

Array.prototype.myMap = function(fun) {
  var result = [];
  this.myEach(function (element) {
    result.push(fun(element));

  });
  return result;
}

var test = [1,2,3].myMap(function (num) { return num * 3; });
console.log(test);

Array.prototype.myInject = function(func) {
  var result = this[0];
  this.slice(1).myEach(function (element) {
    result = func(result, element);
  });
  return result;
}

var test = [1,2,3,4,5].myInject(function (acc, element) {
  return acc + element;

});
console.log(test);
