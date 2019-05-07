// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


/*  (1)  */

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    return cb(arr.length);
  }

  function printLength(length) {
    console.log("There are " + length + " items in the array.")
  }

  getLength(items, printLength);


/*  (2)  */

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr, arr.length-1); 
}

  function lastItem(arr, i) {
    console.log("The last item in the array is " + arr[i] + ".");
  }
  
  last(items, lastItem)

  
/*  (3)  */

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  z = x + y
  cb(x, y, z);
}

  function numsSummed(x, y, z) {
    console.log("The sum of " + x + " & " + y + " is " + z + "!");
  }
  
  sumNums(9, 10, numsSummed);


/*  (4)  */

 function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  z = x * y
  cb(x, y, z);
}

  function numsMultiplied(x, y, z) {
    console.log("The product of " + x + " & " + y + " is " + z + "!");
  }
  
  multiplyNums(9, 10, numsMultiplied);


/*  (5)  */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  var results = Boolean(list.map(function(e) { return e; }).indexOf(item));
  cb(results);
}

  function containsDecision(results) {
    console.log(results);
  }

contains("Gum", items, containsDecision);

/* STRETCH PROBLEM */
let oldArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  newArr = oldArr.filter(function(item, pos) {
    return oldArr.indexOf(item) == pos;
  }); 

  arrCompare(oldArr, newArr);

}

function arrCompare(arr, arrNew) {
  console.log("Old array has " + arr.length + " items." + "\n" + "New array has " + arrNew.length + " items.");
}

removeDuplicates(oldArr, arrCompare)