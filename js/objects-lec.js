"use strict";

//I have a truck - need it to get around San Antonio, I can definitely start talking about my truck in JavaScript like this:

var myTruck = ["Chevy", "Silverado", 2017, "High Country", "Bed lining", "4x2", "Bose sound system"]

console.log("Hey. Here's some information about my truck:");

console.log(myTruck);

myTruck.unshift("Honda");
myTruck.push("other details");

console.log(myTruck);

myTruck.unshift("enchiladas verdes");

console.log(myTruck);

//An array is just a long list of indexed primitives . . not smarter or dumber than that, it is just what it is

//An object is probably the answer here
//DEPTH - VERTICALITY - lets me assign 'properties'

//If I want to make a new object. . I could call something that is referred to as a 'constructor'

// var exampleObj = new Object();
//
// console.log(typeof exampleObj);
// console.log(exampleObj);

//In JavaScript, we have ways to shorten the creation of an object . . let's try the 'object literal notation' >> {} <<

var myTruckObject = {}; //use some curly braces

console.log(typeof myTruckObject);
console.log(myTruckObject);

//An object by itself is not too helpful - we can provide properties (props) to it
//Primitives/arrays/otherwise can be assigned to an object!
//We can even assign functions to objects as properties, and then they are called METHODS

//Here's a few ways to start assigning properties:

//First, we have DOT NOTATION
myTruckObject.make = "Chevrolet";

console.log("How does my object look now?");
console.log(myTruckObject);

//SECOND, ARRAY notation
myTruckObject["model"] = "Silverado";

console.log("How does my object look now? 2nd time");
console.log(myTruckObject);

//After this, I will break for a minute to allow you to experiment with making your own car object :D

//Back! Okay, let's UPDATE a property that exists already

myTruckObject.make = "Chevy";

console.log(myTruckObject);

//What if I only want to know the make? or the model? Do I have to always talk to the whole object?

//Access properties:

console.log(myTruckObject.make + " is the make of my truck. I did some research when I was selling cars and preferred what I saw to some other products");

console.log(myTruckObject["model"] + " is the model of truck I got from " + myTruckObject["make"]);

myTruckObject.year = 2017;

console.log("How does my object look now? 3rd time w/year");
console.log(myTruckObject);

//My trucks got features - it has an OWNER, it has equipment

//nested object
myTruckObject.owner = {firstName: "Kenneth", lastName: "Howell", nextService: "02/12/2023"};

//features.. sound like an array
var myFeatures = ["Bose sound", "4 x 2", "One accident on record", "Bed lining", "Tinted windows"];

myTruckObject.features = myFeatures;

console.log("How does my object look now? 4th time w/ nested obj! w/ features array!");
console.log(myTruckObject);

//YOU DO: Would you like to add a nested object / array to your car? Give it a shot

var mySecondCar = {make: "Jeep", model: "Wrangler", year: 2015, features: ["All terrains", "always loud when driving", "navigation", "hard top"]}

var myGarage = [myTruckObject, mySecondCar];

//Bonus content:

// var exampleArray = [
//     {
//     bookTitle: "Raise High the Roof Beams Carpenters",
//         author: "J.D. Salinger"
//     }
//     , {
//     bookTitle: "Book2",
//         author: "This guy"
//     }
// ]

myGarage.forEach(function(myTruck){ //an array of objects

   myTruck.features.forEach(function(feature, index){ //an array of features

    console.log("Here is a " + feature + " I found at this index " + index);
    }

)

    //Okay, that's pretttttttttty deep and wild - like it love it, what else can I do?

    //How about letting our truck execute a function? We can assign functions to objects [ = = = methods]

    myTruckObject.turnOn = function(){
       console.log("Putting the key in the ignition and firing up my truck!")
    }

    mySecondCar.turnOn = function(){
       console.log("I'm changing the console.log to show you a different effect in our console when we call this one")
    }
})