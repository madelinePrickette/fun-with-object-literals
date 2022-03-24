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