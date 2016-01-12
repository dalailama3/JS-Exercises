Function.prototype.myBind = function (obj) {
  var fn = this;

  var foos = arguments;
  var args = Array.prototype.slice.call(arguments, 1);


  return function () {
    callTimeArgs = Array.prototype.slice.call(arguments);
    fn.apply(obj, args.concat(callTimeArgs));
  };

};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
}


markov = new Cat("Markov");
breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");

markov.says.myBind(breakfast, "meow", "Kush")();
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
