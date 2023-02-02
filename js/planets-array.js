(function(){
    "use strict";
    // alert("Ready to go")

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    var ourSun = "The Sun";

    planets.unshift(ourSun);

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

  planets.push("Pluto"); //instead of a var, let's just send up a string literal argument

    console.log('Removing "The Sun" from the beginning of the planets array.');


  var willThisWork =  planets.shift();
  console.log(planets);
    console.log(willThisWork + " = our attempt to capture something");

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);



    console.log('Finding and logging the index of "Earth" in the planets array.');

    var indexOfEarth = planets.indexOf("Earth");
    console.log(indexOfEarth + " is the index of 'Earth'");

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();