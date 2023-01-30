"use strict";

// var i = 2;
// while(i <= 65536) {
//     console.log(i);
//     i = i * 2;
// }

var cones = Math.floor((Math.random() * 50) + 50)
// console.log(cones);
do {
    var conesSold = Math.floor((Math.random() * 4) + 1);
    if(conesSold < cones) {
        console.log(conesSold + " cones sold...");
        cones -= conesSold;
    } else if (conesSold > cones) {
        console.log("Cannot sell you " + conesSold + " cones I only have " + cones);
    } else {
        console.log("Yay! I sold them all!");
        cones -= conesSold;
    }
} while(cones > 0)