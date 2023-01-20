"use strict";

console.log("Hello - it's me, external JavaScript. I am alone out here in my .js file :(");


//Alert - How do I first open up a window to show my user some information?
// alert("Hey, this is me typing in what will appear inside the alert window");
//
// //Can also use variables :D
// var myName = "Kenny";
//
// alert("Hey, this is " + myName + " talking to you about JavaScript today!");
//
// //Can it run an expression?
//
// alert(2+2);
//
// alert(true && false);
//
// // Getting woodsy with it na na na na na nana
// alert(2+2-5-(5*5));

//Alert really just shoots out information to read - limited "interaction", right?

//Confirm - True or false? [ok and cancel]
var likedLunch = confirm("How was your lunch today? Did you like your lunch?");

alert("You told me that it was " + likedLunch + " that you liked lunch");

//Prompt - Can you write me something in response to what I asked in the window?

var whatDidYouHaveForLunch = prompt("Hey, I know it was " + likedLunch + " that you liked lunch, but what did you have?")

alert("You told me you had " + whatDidYouHaveForLunch + " for lunch");

//I make a change to a file <