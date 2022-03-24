console.log('working');

let card0 = {
//This is an object literal ^^
    suit: 'Hearts',
    number: 2
   //This will set the properties of the object 
   //Assign values with a colon :
   //Use comma between each one ,
   //Chrome will list objects in alphabetical order
}//end card0

let card1 = {
    suit: 'Spades',
    number: 1
}//end card1

function isRed(cardToCheck){
    console.log('in isRed', cardToCheck);
    if( cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds'){
        return true;
    }//end red
    else{
        return false;
    }//end !red
}//end isRed

console.log(isRed(card0));
console.log(isRed(card1));



let card2 = {
    suit: 'Diamonds',
    number: 6
}//end card2

let card3 = {
    suit: 'Spades',
    number: 6
}//end card3

let card4 = {
    suit: 'Club',
    number: 12
}//end card4

function higherCard(firstCardToCheck , secondCardToCheck){
    console.log('in higherCard');
    if( firstCardToCheck.number > secondCardToCheck.number ){
        return true;
    }//end red
    else if( firstCardToCheck.number === secondCardToCheck.number ){
        return 'equal card numbers';
    }
    else{
        return false;
    }//end !red
}//end isRed

console.log('card2 and card3. Expect equal ==>', higherCard(card2 , card3));
console.log('card0 and card4. Expect false ==>', higherCard(card0 , card4));
console.log('card3 and card1. Expect true ==>', higherCard(card3 , card1));
console.log('card0 and card2. Expect false ==>', higherCard(card0 , card2));

