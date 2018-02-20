
function Fizzbuzz() {

};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
return(number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};
Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};
Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if(this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleByFive(number)) {
    return "Buzz";
  } else if (this.isDivisibleByThree(number)) {
    return "Fizz";
  } else {
    return number
  };
};

fizzbuzz = new Fizzbuzz();

function spitOut() {
  for(let i = 1; i <= 30; i++){
    console.log(fizzbuzz.says(i));
  };
};

spitOut()