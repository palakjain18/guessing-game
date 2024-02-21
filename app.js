const max = prompt("Enter maximum number");


const random = Math.floor(Math.random()*max) + 1;
// 

let guess =  prompt("Guess the number");

while(true) {
    if( guess == "quit") {
        console.log(" you quit!");
        break;
    }

    if( guess == random ) {
        console.log ( "Your guess is right. Congrats! Random number was" , random);
        break;
    } else if (random < guess ) {
        guess = prompt("hint : Your guess is large. Try guessing a smaller number.")
    } else if (random > guess) {
        guess = prompt(" hint : Your guess is a bit small, try guessing a larger number.")
    } 
}