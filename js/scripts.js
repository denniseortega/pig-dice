//Business Logic

// Dice Object Constructor
function Dice(){
  this.num = 6;
}

// Prototype Method that changes the dice number
Dice.prototype.roll = function() {
  var newNum = Math.floor(Math.random() * 6) + 1;
  this.num = newNum;
}

//Player object
function Player(){
  this.playerDice = new Dice();
  this.score = 0;
  this.totalScore = 0;
  this.roundTotal = 0;
}

// Prototype Method to change player score
Player.prototype.changeScore = function() {
 if (this.playerDice.num > 1) {
      this.score = this.playerDice.num;
      console.log("Inside ChangeScore: " + this.score);
      this.roundTotal += this.score;
  } else {
    console.log("Entered else in changeScore" + this.score);
    this.score = 0;
    this.roundTotal = 0;
    this.totalScore += this.roundTotal;
  }
}

var playerOne = new Player();
var playerTwo = new Player();


// Player.prototype.scoreGame = function() {
//   this.Player.totalScore.changeScore();
//
//   return this.totalScore += roundTotal;
// };

// Front End Logic
$(document).ready(function() {

  function checkWin(){
    if(playerOne.totalScore >= 100) {
      alert ("Player One Wins");
    } else if (playerTwo.totalScore >= 100) {
      alert ("Player Two Wins");
    }
  }

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
    $("#show-scores-one").text("Round Total: " + playerOne.roundTotal + " Total Score: " + playerOne.totalScore)
    if (playerOne.playerDice.num == 1) {
      $("#show-scores-one").text("Round Total: " + playerOne.roundTotal + " Total Score: " + playerOne.totalScore)
      $("#player-one").hide();
      $(".shows-dice-1").fadeOut(1000);
      $(".shows-dice-2").fadeIn(1000);
      $("#player-two").show();
    }
    checkWin();
  });
  $("#p1-hold").click(function(event){
    event.preventDefault();
    playerOne.totalScore += playerOne.roundTotal
    $("#show-scores-one").text("Total Score: " + playerOne.totalScore)
    $("#player-one").hide();
    $(".shows-dice-1").hide();
    $(".shows-dice-2").fadeIn(1000);
    $("#player-two").show();
  });
  $("#p2-roll").click(function(event){
  event.preventDefault();
    playerTwo.playerDice.roll();
    playerTwo.changeScore();
    $(".shows-dice-2").text(playerTwo.playerDice.num);
    $("#show-scores-two").text("Round Total: " + playerTwo.roundTotal + " Total Score: " + playerTwo.totalScore)

    if (playerTwo.playerDice.num == 1) {
      $("#show-scores-two").text("Round Total: " + playerTwo.roundTotal + " Total Score: " + playerTwo.totalScore)
      $("#player-two").hide();
      $(".shows-dice-2").fadeOut(1000);
      $(".shows-dice-1").fadeIn(1000);
      $("#player-one").show();
    }
    checkWin();
  });
  $("#p2-hold").click(function(event){
  event.preventDefault();
  playerTwo.totalScore += playerTwo.roundTotal
  $("#show-scores-two").text("Total Score: " + playerTwo.totalScore)
  $("#player-two").hide();
  $(".shows-dice-2").hide();
  $(".shows-dice-1").fadeIn(1000);
  $("#player-one").show();
  });



});
