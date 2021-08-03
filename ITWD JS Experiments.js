// this is a comment on one line....

/*
this is
still 
a
comment
*/



//This commented off section is for Programming Fundementals


/*
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


/*
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log("Cool, now I can have all the nachos to myself!");
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount of people to play Mariokart!");
} else {
    console.log("Woo! Start blasting some Music!!!")
}



// this is an in-effcient way of doing loops, going to comment out.

let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;

console.log(friendsAtYourParty)


/*
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
    friendsAtYourParty = friendsAtYourParty + 1;
}

console.log(friendsAtYourParty)

let friendsAtYourParty2 = 0;
for (let i = 0; i <= 10; i++) {
    friendsAtYourParty2++;
}
console.log(friendsAtYourParty);
*/


//Functions and Scope Section

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(25);
console.log(finalAnswer);

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us, ${firstName}! I Hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Steve", "Holt", "Master", "Good Evening!"))
console.log(greet("Jack", "Sparrow", "Captain", "Ahoy der"))

const myHomeCity = "Calgary";
const myHomeProvince = "Alberta";
const myHomeCountry = "Canada";

function logOutYourHome(city, province, country) {
    console.log(`You are from ${city}, ${province} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeProvince, myHomeCountry);