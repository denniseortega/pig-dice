//Business Logic

// Dice Object Constructor
function dice(num){
  num = 6;
  this.num = num;
}

// Prototype Method that changes the dice number 
dice.prototype.roll = function() {
  var newNum = Math.floor(Math.random() * 6) + 1 ;
  return this.num = newNum;
};

// Front End Logic
