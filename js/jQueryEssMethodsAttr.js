
//Getters and Setters
//.html() < has two behaviors one to GET html, one to SET html

// console.log($("#footer").html());
//
// console.log($("body").html());

let footerHTML = $("#footer").html();

console.log("variable call below: ");
console.log(footerHTML);

//Sidebar: .text() is available and similar to innerTEXT and also has GET or SET capabilities

//Setting HTML

//DLC content loaded: What punctuation am I using? What is this here below?
//Answer: String templates with modern JavaScript - I can use backticks (we will see this again in JavaScript 2 :D)

let newFooterHTML = `<ul>
<li>new footer item</li>
<li>new footer item</li>
<li>new footer item</li>
</ul>`;

//Setting: Provide an argument and the .html() method is now SETTING vs getting

// $("#footer").html(newFooterHTML);

//Can be outside a var too:

// $("#footer").html(`<div>error</div>`);

//Expanded example: Tied behind a click event with a button of id myBtn

$("#myBtn").click(function(){
    $("#footer").html(newFooterHTML)

})

//Okay- that looks good, what about .css()
//Similar breakdown: can GET + can SET

console.log($("#footer").css("display"));
console.log($("#footer").css("width"));
console.log($("#footer > ul").css("width"));
console.log($("#footer > ul > li").css("width"));

//I got it - now let's SET IT



$("#footer > ul").css("padding", "20px")

//Method chaining

$("#footer > ul > li")
    .css("background-color", "rebeccapurple")
    .css("color", "red")
    .css("border", "10px dashed coral")
    .css("font-size", "2em")


//Trying behind event

$("#myBtn2").on("click", function(){
    $("#footer > ul").css("background-color", "red")
})

//Try it with an object - this notation is interesting, have you seen it before? (hint: JSON)

// $("#footer > ul").css(
//     {
//         'border':'5px solid cornflowerblue',
//         'border-radius': '50%'
//     })

//addClass, removeClass, toggleClass < semantically named, you can imagine what they do!

$(".paragraph").addClass("highlight");
$(".paragraph").addClass("bigFont");

$(".paragraph").removeClass("bigFont")

//.toggleClass < event would be cool
$("#myBtn3").click(function(){
    $(".paragraph").toggleClass("highlight");
})

//.hover() with toggleClass idea:

// $("#footer > ul").hover(function(){
//         $(this).toggleClass("bigBorder")
//     },
//
//     function(){
//         $(this).toggleClass("bigBorder")
//     })

//Can you show .off() again? (Question from the chat)
$("button").off();

