// this is a comment on one line....

/*
this is
still 
a
comment
*/


const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Steve Holt" ;
console.log(myName);

const firstName = "Steve";
const lastName = "Holt" ;

const sentence = "Hello " + firstName + " " + lastName + "! How are you?!";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`

console.log(sentence);
console.log(sentenceWithTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The Sky is blue!");
}   else{
    console.log("The Sky is...Non-Blue");
}

if (2 + 2 === 4) {
    console.log("Oh thank goodness that Math Fundamentals is true in JavaScript") ;
} else {
    console.log("FREAKOUT");
}

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log("Cool, now I can have all the nachos to myself!");
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount of people to play Mariokart!");
} else {
    console.log("Woo! Start blasting some Music!!!")
}