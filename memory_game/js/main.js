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
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
}
// The function compares the cards flipped over by the user
// and tells user if there is a match or not.

var flipCard = function (cardId) {
  console.log("user flipped " + cards[cardId].rank);
  console.log("user flipped " + cards[cardId].cardImage);
  console.log("user flipped " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length ===2) {
    checkForMatch();
         }

}
//This function calls the checkForMatch function if 2 cards have
//been selected.

flipCard(0);
flipCard(2);
