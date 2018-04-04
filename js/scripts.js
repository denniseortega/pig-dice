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
  roundTotal = 0;
  this.score = score;
  this.playerDice = playerDice;
  this.totalScore = score;
  this.roundTotal = roundTotal;
}

// Prototype Method to change player score
Player.prototype.changeScore = function() {
 if (this.playerDice.roll() > 1) {
      this.score = 0;
      this.score += this.playerDice.num;
      this.roundTotal += this.score;
      console.log(roundTotal);
  } else {
    this.score = 0;
    this.roundTotal = 0;
    console.log(roundTotal);
  }
}

Player.prototype.scoreGame = function() {
  this.Player.totalScore.changeScore();

  return this.totalScore += roundTotal;
};

var playerOne = new Player();
var playerTwo = new Player();

function checkWin(){
  if(playerOne.totalScore >= 100) {
    alert ("Player One Wins");
  } else if (playerTwo.totalScore >= 100) {
    alert ("Player Two Wins");
  }
}

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
    playerOne.scoreGame();
    $(".shows-dice-1").text(playerOne.playerDice.num);
    $("#show-scores-one").text(playerOne.totalScore)
    console.log(playerOne.totalScore);
    if (playerOne.playerDice.num == 1) {
      $("#player-one").hide();
      $(".shows-dice-1").fadeOut(2000);
      $(".shows-dice-2").fadeIn(2000);
      $("#player-two").show();
    }
    checkWin();
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
    playerTwo.scoreGame();
    $(".shows-dice-2").text(playerTwo.playerDice.num);
    $("#show-scores-two").text(playerTwo.totalScore)
    console.log(playerTwo.totalScore);

    if (playerTwo.playerDice.num == 1) {
      $("#player-two").hide();
      $(".shows-dice-2").fadeOut(2000);
      $(".shows-dice-1").fadeIn(2000);
      $("#player-one").show();
    }
    checkWin();
  });
  $("#p2-hold").click(function(event){
  event.preventDefault();
  $("#player-two").hide();
  $(".shows-dice-2").hide();
  $(".shows-dice-1").fadeIn(2000);
  $("#player-one").show();
  });



});
