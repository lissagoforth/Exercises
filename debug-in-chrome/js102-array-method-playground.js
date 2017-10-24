{
  let colors = ["red", "blue", "green", "yellow", "orange", "teal"];

  let reversedColors = colors.reverse();

  let sortedColors = colors.sort();

  let numbers = [20,10,5,8,30,100,19];
  let sortedNumbers = numbers.sort(function(first, second) {
    return first - second;
  });

  let joinedColors = colors.join(" and ");

  let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  let citrus = fruits.slice(1); // ["Orange", "Lemon"]



  joinedColors = colors.join(",");
  let newColorArray = joinedColors.split(",");


  /*
    The forEach method is equivalent to using
    a for loop to iterate over items in the array
  */

  colors.forEach(function(color) {
  });

  for (let i = 0; i < colors.length; i++) {
  }




  /*
    The map method lets you create a new array after
    executing some logic on each item in the original
    array
  */

  reversedColors = colors.map(function(color) {
    return color.split("").reverse().join("");
  });


  reversedColors = [];
  for (let i = 0; i < colors.length; i++) {
    let reversed = colors[i].split("").reverse().join("");
    reversedColors.push(reversed);
  }




  /*
    The filter method creates a new array, which will
    be populated with items from the original array
    that match a certain criteria.
  */

  let fourLetters = colors.filter(function(color) {
    return color.length === 4;
  });

  fourLetters = [];
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].length === 4) {
      fourLetters.push(colors[i]);
    }
  }




  /*
    The reduce method will perform the same operation
    one each item in an array, but returns only a single
    value resulting from the logic you write
  */
  numbers = [51, 10, 62, 4, 13, 9];

  let sum = numbers.reduce(function (prev, curr) {
    return prev + curr;
  });

  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }



  let words = ["one", "in", "the", "hand", "is", "worth", "two", "in", "the", "bush"];

  let sentence = words.filter(function (word) {
    return word.length > 2;
  }).reduce(function (previous, current) {
    return previous + " " + current;
  });
}














