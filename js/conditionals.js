"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(input){
//     if(input === "red"){
//         return "Red roses are typical for Valentines Day - coming up next month!"
//     } else if (input === "orange"){
//         return "My favorite royal family from history - also a delicious fruit!"
//     } else if (input === "yellow"){
//         return "Keep it mellow when you are yellow - the sun is a yellow object to some people!"
//     } else {
//         return input + "? I don't know much about " + input;
//     }
//
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'chaurtreuse', 'nasty yellow', 'mucus green'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(input){

    switch(input){
        case "red":
            return "Red roses are typical for Valentines Day - coming up next month!"

        case "orange":
            return "My favorite royal family from history - also a delicious fruit!"

        case "yellow":
            return "Keep it mellow when you are yellow - the sun is a yellow object to some people!"

        default:
            return input + "? I don't know much about " + input;
    }

}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Hellllloooo user - what is your FAVORITE color?");
//
// alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// If your lucky number is 0 you have
// no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//     the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// everything for free!.

function calculateTotal(luckyNum, totalAmount){

    if(luckyNum === 0){
        return totalAmount;
    } else if(luckyNum === 1){
        return totalAmount - (totalAmount * .10);
    } else if (luckyNum === 2){
        return totalAmount - (totalAmount * .25);
    } else if (luckyNum === 3){
        return totalAmount - (totalAmount * .35);
    } else if (luckyNum === 4){
        return totalAmount - (totalAmount * .50);
    } else if (luckyNum === 5){
        return totalAmount - totalAmount;
    }


}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBill = prompt("Hello - how much did you pay today?");
//
// alert("I've got news - your lucky number was " + luckyNumber + ", and your total was $" + totalBill + " which means you pay $" + calculateTotal(luckyNumber, totalBill) + " today!");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type. Refactor opportunity? Could your alert be programmed to tell them what data type they gave? It would always be a string from prompt. . .
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// confirm < first step, if TRUE proceed, if FALSE stop process
//prompt for number < if NOT number, stop process and alert
//with number - alert a.> number odd or even? b.> number + 100 c.> number negative or positive?

var wantsToGiveNumber = confirm("Hello - would you like to give me a number?");

if(wantsToGiveNumber){

    var userNumber = parseInt(prompt("YEAHHHHHHHHH - what number are you going to give me?"));

    if(isNaN(userNumber)){
        alert("Hey - that is NOT a number. That is very rude. Goodbye.")
    } else {
        alert("okay - you gave me a number: " + userNumber);

        var isEven = userNumber % 2 === 0;
        var addOneHundred = userNumber + 100;
        var isPositive = userNumber >= 0;

        //hypothetical future refactor: nested if statements?
        //if(isEven) { alert("YOUR NUMBER IS EVEN }

        alert("It is " + isEven + " that your number is even.");
        alert("Here's your number with 100 added: " + addOneHundred);
        alert("It was " + isPositive + " that your number was positive.");


    }

} else {
    alert("y do u hate numbers tho")
}
