// Array - Manipulating Arrays

/*
*	 Arrays - Manipulating Arrays
*		- Adding Elements
*		- Removing Elements
*		- Locating elements in array
*		- Slicing
*		- Reversing
*		- Sorting
*		- converting between strings and arrays
*			- Splitting
*			- Joining
*		- Exercise
*/

/////***** Manipulating Arrays *****/////


///*** Adding Elements ***///

/*
    Syntax:

            (*) unshit() - add one or more elements to the start of an array
                Array.unshift(element);

            (*) push() - push method will add one or more element to the end of an array
                Array.push(element)

 */

// Example:
console.log("_____ unshift and push methods Example:____");

    var students = ["kevin", "sammie", "bobby"];

    //--- unshift method
        // We have more students that got added to our class
        students.unshift("lucy", "bobby", "kris");
        // show all students
        console.log(students);

    //-- push method
        // old students that came back
        students.push("sandy", "meg");
        // show all students
        console.log(students);

// (QUESTIONS:)

///*** Removing Elements ***///

/*
    Syntax:
        (*) - shift() - Removes elements from the start of an array
                Array.shift();
        (*) pop method - Removes elements from the end of an array.
                Array.pop();
 */

// Example:
console.log("_____Shift & Pop Example:____");


        console.log(students);

        ///--- shift method
            // remove first student
            students.shift();
            // Show new class list
            console.log(students);

        ///--- pop method
            // remove someone at the end of our array
            students.pop();
            // show new list
            console.log(students);

// (QUESTIONS???)


///*** Locating elements in array ***///

/*
    Syntax:
        (*) indexOf() - searching from the start of the array
                arrayName.index(element);
        (*) lastIndexOf() - Search the array starting from the end of the array
 */

// Example:
console.log("_____ indexOf & lastIndexOf Example:____");

        //--- indexOf()
            // Show the list of the current students
            console.log(students);
            // Show me the index of the student sammie
            var indexOfSammie = students.indexOf("sammie");
            console.log(indexOfSammie)
            console.log(students[indexOfSammie])

        //-- lastIndexOf()
            // Starts the search at the end of the array
            // look for the index of kris
            var indexOfKris = students.lastIndexOf("kris");
            console.log(indexOfKris);
            console.log(students[indexOfKris])

/// ?? Question: What if there is two students with the same name???

        // indexOf()
        //     searching for bobby
        var searchForFirstBobby = students.indexOf("bobby");
            console.log(searchForFirstBobby);

        // lastIndexOf();
        var lastBobby = students.lastIndexOf("bobby");
        console.log(lastBobby);

// ?? Question: What if we search for a student and they are not present

        // indexOf()
        var noShow = students.indexOf("Paul");
        console.log(noShow);

// (QUESTIONS) What if there is another bobby in the middle
console.log("___BONUS QUESTION___");

        var students2 = ["lucy", "bobby", "kevin", "bobby", "paul", "bobby"]

        var middleBobby = students2.indexOf("bobby", 2); // (what we search for, where to start)
        console.log(middleBobby);



///*** Slice Elements ***///

/*

    Syntax:
        (*) slice() - allows us to copy a portion of an array, creates a new array
        ArrayName.slice(start, end); end index option
 */

// Example:
console.log("_____ Slicing Example:____");

    //---- slice() method
        // show students
        console.log(students);
        // Show the middle students
        var middleStudents = students.slice(2,5);
        //show the new array
        console.log(middleStudents);

        console.log(students);
    // Create a new array with only the first three students
        var firstThreeStudents = students.slice(0,3);
        console.log(firstThreeStudents);

    // Create a new Array that capture the last three students

        var lastThreeStudents = students.slice(3);
        console.log(lastThreeStudents);

    // Create with slice with an empty element

        var emptySlice = students.slice();
        console.log(emptySlice);

    // BONUS: CREATIVE
        var negNum = students.slice(-4);
        console.log(negNum);



///*** Reversing Elements ***///

/*

    Syntax:
        (*) reverse() method
            arrayName.reverse();

 */

// Example:
console.log("_____ Reversing Example:____");

    //-- reverse() method
        console.log(students);
        // Reverse the order of the array
        students.reverse();
        // checkout out students
        console.log(students)

// (QUESTIONS)



///*** Sorting Elements ***///

/*

    Syntax:
        (*) sort() method - Used when you want to sort an array by A-Z
                            By default it will sort elements by strings
                arrayName.sort();
 */

// Example:
console.log("_____ Sorting Example:____");

            // show students list
            console.log(students);
            // Sort The array, remember it sort by A-Z
            students.sort();
            //check out updated list
            console.log(students);

//  BONUS: (*) sort number -> produce incorrect results

console.log("____BONUS____")
            var num = [100,2,7,50,14,22];
            console.log(num);
            num.sort();
            console.log(num);

//  (QUESTIONS)


///*** converting between strings and arrays ***///

///** Slitting method **/////
        //-- will turn a string into an array
        // it will return a new array
/*
    Syntax:
            arrayName.split(separator, limit) // they are optional
*/

// Example:
console.log("_____ Splitting Example:____");

// list of months as a string
var months = "January,February,March,April,May,June,July,August,September,October,November,December"
// Turn this string into an array
var arrayMonths = months.split('');
console.log(arrayMonths);

var gillyName = "Nick Gilly Gilmore";
var gillyArray = gillyName.split(" ");
console.log(gillyArray);

// show with a limit
var sentence = "Welcome to the jungle!";
var limitSplit = sentence.split(" ", 3);
console.log(limitSplit)

// show split empty - creates a new array.
var emptySplit = sentence.split();
console.log(emptySplit);


// (BONUS: what if you have two array with different separators)
console.log("_____BONUS____")

var string1 = "wow this is cool"
var string2 = "this,is,string,two"

var newString1 = string1.split(" ");
var newString2 = string2.split(",");


var wow = newString2.concat(newString1)
console.log(wow);




//// ** Joining method **////

/*
*       Syntax:
*           // this method turns array into a string
*           ArrayName.join(separator)
*
* */

// Example:
console.log("_____ Joining Example:____");

    // Create an array
    var elements = ["fire", "air", "water"];

    // practice with different separators with join
    console.log(elements.join(","));
    console.log(elements.join(" "));
    console.log(elements.join(" + "));
    console.log(elements.join(" | "));
    console.log(elements.join());

// (QUESTIONS)





