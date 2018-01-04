var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
]
// object holds 4 cards with 3 properties each

var cardsInPlay =[];
//This variable will hold the cards the user chooses

var score = 0
document.getElementById('score').innerHTML = score;
var game = 1
document.getElementById('game').innerHTML = game;
//on load the score is 0 and the game is 1

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  score = score + 1;
  document.getElementById('alertPlayer').innerHTML = "You found a match!";
  } else {
  document.getElementById('alertPlayer').innerHTML = "Sorry, try again!";
  }
  document.getElementById('score').innerHTML = score;
}
// The function compares the cards flipped over by the user
// and tells user if there is a match or not.
// I changed to a text display from the suggested alert as the alert box
// felt distracting and I wanted my user to see both cards before being told
//if a match was found or not.

var flipCard = function () {
  var cardSrc = this.getAttribute('src');
  if(cardSrc === 'images/back.png') {
    var cardId = this.getAttribute('data-id');
    var cardId = this.getAttribute('data-id');
    console.log("user flipped " + cards[cardId].rank);
    console.log("user flipped " + cards[cardId].cardImage);
    console.log("user flipped " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage)
  if (cardsInPlay.length ===2) {
    checkForMatch();
         }
      }
}
//This function replaces the back image with the correct card image
//It then calls the checkForMatch function if 2 cards have been selected.


var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
document.getElementById('alertPlayer').innerHTML = "Click a card to flip it";}
}
//This function loops through the cards object and adds each item to the game
// board. It also adds a click Event Listener to each created element.


var resetBoard = function(){
 if (cardsInPlay.length >1) {
   cardsInPlay.length = 0 //we must set this back to 0 values to reset the game
  if (game>9){
      switch (score) {
        case 0: case 1: case 2:
        var myMemory = " terrible ";
        break;
        case 3: case 4: case 5:
        var myMemory = "n ok ";
        break;
        case 6: case 7: case 8:
        var myMemory = " good ";
        break;
       case 9: case 10:
        var myMemory = " great ";
        break;
      }//No more refreshes after ten games. (gotta stop somehwere!)
      //But alert the user as to how good the user's memory is based on
      //number of games won out of ten.
  alert("You won " + score + " out of 10 games. You have a" + myMemory + "memory!");
    }
  else {
      if (game>1){
          var cardsLength = cards.length;
        }
        else {
          var cardsLength = cards.length + 1;
        }
        //first time game needs an extra clear
        for (var i = 0; i < cardsLength; i++) {
          var list = document.getElementById('game-board');  // Get the element with id=game board
          list.removeChild(list.childNodes[0]); //loop the list and remove images
          var cardElement = document.createElement('img');
        }
        game = game + 1;
        document.getElementById('game').innerHTML = game;
        // update the game number then rebuild the board
        createBoard();
    }
  }
}

document.getElementById('reset').addEventListener('click', resetBoard);
//on click of the button, reset the board by calling the function.

createBoard();
