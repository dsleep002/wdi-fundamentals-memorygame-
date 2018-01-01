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
// object holds 4 cards

var cardsInPlay =[];
//This variable will hold the cards the user chooses

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
}
// The function compares the cards flipped over by the user
// and tells user if there is a match or not.

var flipCard = function () {
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

//This function calls the checkForMatch function if 2 cards have
//been selected.
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);}
}

createBoard();
