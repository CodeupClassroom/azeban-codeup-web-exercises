console.log("Hey, good morning - Hello from External JS");

alert("Welcome to my website, Azeban :D");

var userResponse = prompt("Hey user - what is YOUR favorite color? Please let me know!"); //assign into variable the result of the prompt

alert("That's pretty neat - did you know that " + userResponse + " is also MY favorite color. Small world"); //reuse variable in alert to show information back to user :)

//Time to write actual JavaScript and execute the following word problems:

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

 alert("Welcome to Kenny's movies - all movies are three dollars per day. Right now I've got three movies - The Little Mermaid, Brother Bear, Hercules. How long would you like to rent those movies?");

 var littleMermaidDays = prompt("How long do you rent the little mermaid?");

 var brotherBearDays = prompt("Nice - how many days would you like to rent brother bear?");

 var herculesDays = prompt("Finally, Hercules - how many days may I rent that to you?");

 var dailyRate = 3;

 alert((littleMermaidDays * dailyRate) + " is how much for Little Mermaid. " + (brotherBearDays * dailyRate) + " is how much you owe for brother bear. Finally, you will be charged " + (herculesDays * dailyRate) + " for hercules");





//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//canDiscount = (isPremium === true || moreThanTwo === true) && offerNotExpired
//I can offer a discount to you if you are a premium member or you have more than two items - either way, I need to make sure the offer is good

alert("Thanks for coming to Howell's Haberdashery - we are offering a special where if you buy more than two hats I can give you a special offer, if you are a premium member you can always get our special offers, and I will have to make sure our offer in general has not expired.")

var isPremium = confirm("Are you a valued premium member?");
var moreThanTwo = confirm("Did you buy more than two items today");
var offerNotExpired = confirm("Was the coupon still in effect?");


alert("It is " + ((isPremium || moreThanTwo) && offerNotExpired) + " that I can offer you a discount today!");