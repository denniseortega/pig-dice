//Business Logic

// Dice Object Constructor
function Dice(num){
  num = 6;
  this.num = num;
}

// Prototype Method that changes the dice number
Dice.prototype.roll = function() {
  var newNum = Math.floor(Math.random() * 6) + 1;
  return this.num = newNum;
}

//Player object
function Player(){
  playerDice = new Dice();
  score = 0;
  totalScore = 0;
  this.score = score;
  this.playerDice = playerDice;
  this.totalScore = score;
}

// Prototype Method to change player score
Player.prototype.changeScore = function() {
 if (this.playerDice.roll() > 1) {
      this.score += this.playerDice.num;
      this.totalScore += this.score;
  } else {
    this.score = 0;
  }
  console.log(this.score);
}

var playerOne = new Player();
var playerTwo = new Player();

// Front End Logic
$(document).ready(function() {
  $("#player-one").hide();
  $("#player-two").hide();
  $(".show-scores-1").hide();
  $(".show-scores-2").hide();

  $(".play").click(function(event){
    event.preventDefault();
    $("#player-one").show();
    $(".show-scores-1").show();
    $(".show-scores-2").show();
    $(".play").hide();
  });

  $("#p1-roll").click(function(event){
    event.preventDefault();
    playerOne.playerDice.roll();
    playerOne.changeScore();
    $(".shows-dice-1").text(playerOne.playerDice.num);
    $("#show-scores-one").text(playerOne.totalScore)

    if (playerOne.playerDice.num == 1) {
      $("#player-one").hide();
      $(".shows-dice-1").fadeOut(2000);
      $(".shows-dice-2").fadeIn(2000);
      $("#player-two").show();
    }
  });
  $("#p1-hold").click(function(event){
    event.preventDefault();
    $("#player-one").hide();
    $(".shows-dice-1").hide();
    $(".shows-dice-2").fadeIn(2000);
    $("#player-two").show();
  });
  $("#p2-roll").click(function(event){
  event.preventDefault();
    playerTwo.playerDice.roll();
    playerTwo.changeScore();
    $(".shows-dice-2").text(playerTwo.playerDice.num);
    $("#show-scores-two").text(playerTwo.totalScore)

    if (playerTwo.playerDice.num == 1) {
      $("#player-two").hide();
      $(".shows-dice-2").fadeOut(2000);
      $(".shows-dice-1").fadeIn(2000);
      $("#player-one").show();
    }
  });
  $("#p2-hold").click(function(event){
  event.preventDefault();
  $("#player-two").hide();
  $(".shows-dice-2").hide();
  $(".shows-dice-1").fadeIn(2000);
  $("#player-one").show();
  });



});
