

var cards = ['queen','queen','king','king'];
// variable holds 4 cards

var cardsInPlay =[];
//This variable will hold the cards the user chooses

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
} // The function compares the cards flipped over by the user
// and tells user if there is a match or not.

var flipCard = function (cardId) {
  console.log("user flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length ===2) {
    checkForMatch();
         }

} //This function calls the checkForMatch function if 2 cards have
//been selected.

flipCard(0);
flipCard(1);
