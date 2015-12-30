function Cat(name, owner) {
  this.name = name;
  this.owner = owner;

  Cat.prototype.cuteStatement = function () {
    return "Everyone loves " + this.name;
  };

  Cat.prototype.meow = function () {
    return this.name + ' says "meow!", and it is extremely effective';
  }
}

gary = new Cat("Gary", "Ash");
console.log(gary.cuteStatement());


matt = new Cat("Matt", "Sarah");
matt.meow = function () { return this.name + " says hello!"};
console.log(matt.meow());

console.log(gary.meow());
