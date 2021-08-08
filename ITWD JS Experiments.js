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

/*
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

*/

const myHomeCity = "Calgary";
const myHomeProvince = "Alberta";
const myHomeCountry = "Canada";

function logOutYourHome(city, province, country) {
    console.log(`You are from ${city}, ${province} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeProvince, myHomeCountry);

/* Scope JS work 


once you call a function, it has its own scope...once the scope/function is done, any avariable that hasn't been explicitly been held on to or
returrned at the end is discarded
*/

/*
function addFive(number) {
    const someVariable = "you can't see me outside this function";
    return number + 5;
}

addFive(10);
console.log(someVariable);

*/
/*

const A = "A";
let F;

function doStuff(B) {
    console.log(B); //works, B parameter is still in scope
    const C = "C";
    let H = "H" ;
    if (1 + 1 === 2){
        const D = "D" ;
        H = "something else" ;
    }
    console.log(D); //does NOT work, D was declared in the IF statement block
    console.log(H); //works, H was declared ourside IF Statement
    F = "F";
}

let E = 0;
while (E < 3) {
    E++;
    console.log(A); //works, the outter block/global scope is still in scope
    const G = "G";
}
console.log(E); // works E was declared oustide the while loop
console.log(G); // does NOT work, declared inside while loop and its over

doStuff("B");
console.log(B); // does NOT work, B parameter expires after function call
console.log(C); // does NOT work, C was declared inside the function, and function is over
console.log(F); // Works, F was declared in global scope

*/

//Built ins

const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toLowerCase());

console.log(Math.round(6.3));

const name = "Carliesp Corlest";
console.log(name.substr(6, 3));





// Objects and Arrays Section

/*
const OBJECT = {
    KEY : VALUE
}

*/

const person1 = {
    name: "Kevin",
    ageRange: "25-35"
};

const person2 = {
    name: "Allan",
    ageRange: "65-75"
};

function suggestMusic(person) {
    if (person.ageRange === "25-35"){
        console.log("We think you'll like Daft Punk your crazy Mellenial");
    } else if (person.ageRange === "65-75"){
        console.log("You're like Johnny Cash, he walks lines.");
    } else {
        console.log("Try...Beatles?! I dont know man, im just trying to learn some code...")
    }
}

suggestMusic(person1);
suggestMusic(person2);