//YOUR JAVASCRIPT CODE HERE - save it all in a file called like skittles.js or some jazz
//JUST change the main function you have to createPackage then open a terminal and run node yourfile.js and it will run all this - ask me at the end of class
        
function findLarge(big, goal) {
    // 5 * largeNumber + x * smallNumber = goal;
    var result = 0;
    for (var i = 0; i <= (big+1); i++) {
        if (result <= goal) {
            result = 5 * i;
            var index = i;
        }
    }
    return index-1;
}

function createPackage(small, big, goal) {
    var num = goal - 5*(findLarge(big, goal));
    if (num <= small) {
        return num;
    }
    else {
        return -1;
    }
}

// console.log(findSmall(0, 5, 12));

var assert = require('assert');

assert.equal(
 createPackage(4, 1, 9),
 4
);

assert.equal(
 createPackage(4, 1, 10),
 -1
);

assert.equal(
 createPackage(4, 1, 7),
 2
);

assert.equal(
 createPackage(6, 2, 7),
 2
);

assert.equal(
 createPackage(4, 1, 5),
 0
);

assert.equal(
 createPackage(4, 1, 4),
 4
);

assert.equal(
 createPackage(5, 4, 9),
 4
);

assert.equal(
 createPackage(9, 3, 18),
 3
);

console.log('Success!');
// (edited)
// also if you don't get it right - here is another possible solution BUT don't change yours till you show me lol

//     var count=0;
//     while(goal/5 >= 1 && big > 0){
//         goal -= 5;
//         big -= 1;
//     }

//     if(goal == 0){

//         return 0;
//     }else if(goal<1){
      
//         return -1;
//     }
    
//       while(goal >0 && small > 0){
//         count++;
//         goal -= 1;
//         small -= 1;
//     }

//     if(goal == 0){
//         return count;
//     }else{
//         return -1;
//     }
    
// }```