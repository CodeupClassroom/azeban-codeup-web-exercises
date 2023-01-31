//----- Today's Agenda:
// ARRAYS
    //--  declaring arrays
    //-- counting arrays
    //-- accessing array elements
    //-- Iterating arrays
    //-- for loops
    //-- for each loop
    //-- Exercise


//-----  declaring arrays

    //  ["element01", "element02"]

    var emptyArray = [];
    var oneElement = [1];
    var elements = [1,2,3,4,5,56,78];
    var differentElementTpyes = ["string", 1,2,3, [1,2,3,4]]

    // Example:
    // title, genre, length of movie, rating out of 10
    var movie = ["scareface", "action", 170, 8];


//----- counting arrays
    console.log("_______Counting arrays_______");
    // EXAMPLE:
    movie = ["scareface", "action", 170, 8];
    console.log(movie.length) // 4


//----- Accessing array elements
    // - Arrays are zero-index
    console.log("_______Accessing Array Elements_______");
    // EXAMPLE:
    var movie = ["scareface", "action", 170, 8];
    // 0            1       2    3

    console.log("The movie " + movie[0]+ " is my fav.");
    console.log("it is full of "+movie[1]+".")
    console.log("it is " +movie[2]+ " minues long")
    console.log("it has a rating of "+movie[3]+".")

//----- Iterating arrays

console.log("_________Iterating arrays________");

    //-- FOR LOOP

    // syntax:
    //     for(initial variable; condition; increment){
    //             body statement
    //     }

    console.log("____For Loop____");
        // Example:
            var colors = ["blue", "purple", "green", "red"];

            console.log(colors.length);

            for(var i = 0;i < colors.length; i++) {
                console.log('The color at index ' + i + " is " + colors[i]);
            }

//--- FOR EACH LOOP

    // syntax:
    //     array.forEach(function(element, index, array)){
    //         body statement
    //     }

    console.log("____For Each Loop___");
        // EXAMPLE:

            colors = ["blue", "purple", "green", "red"];

            colors.forEach(function (color) {
                console.log('Here is a the color: ' + color + '.');
            })


console.log("_________Extra ForEach________");

movie = ["scareface", "action", 170, 8];

console.log(movie.length)   // 4

movie.forEach(function (element, index, array) {
    console.log(element); // the value in this element
    console.log(index); // current index (0, 1, 2, etc)
    console.log(array); // the full Array (movies)
})


