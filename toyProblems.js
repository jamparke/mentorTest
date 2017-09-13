//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string) {
    let stringSplit = string.split("");
    let reverse = stringSplit.reverse();
    let join = reverse.join("");
    return join;
  },
  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(array) {
    return array.filter(function(elem, pos, arr) {
      return arr.indexOf(elem) == pos;
    });
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(string) {
    return string
      .toLowerCase()
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(string) {
    let vowels = [];
    let arr = string.toLowerCase().split("");
    for (var i = 0; i < arr.length; i++) {
      if (
        arr[i] === "a" ||
        arr[i] === "e" ||
        arr[i] === "i" ||
        arr[i] === "o" ||
        arr[i] === "u"
      ) {
        vowels.push(arr[i]);
      }
    }
    return vowels.length;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
};
