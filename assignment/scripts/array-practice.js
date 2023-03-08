console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['pasta', 'rice', 'cookies'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('Favorite Foods: ', favoriteFoods);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of items in Favorite Foods', favoriteFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
 console.log("second animal in animalArray is ", animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('last animal in array is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('last animal in array is', animalArray[animalArray.length -1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('chicken');
console.log('added a food item to end, ', favoriteFoods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedfood = favoriteFoods.pop();
console.log('Removed the last food item', removedfood);
console.log('The food items are now ', favoriteFoods );

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('ice cream');
console.log(`Added a food item to beginning: ${favoriteFoods}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedfood = favoriteFoods.shift();
console.log('Removed the first food', removedfood);
console.log('The foods are now', favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

favoriteFoods[1] = ('mango'); // replace the second in array with mango
console.log('Added new item to array: ', favoriteFoods[1]); //verify that second item is mango
console.log('The foods are now', favoriteFoods); //print new foods array


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

console.log('Favorite Foods in order: ', favoriteFoods.sort()); // sort the favorite foods array in alphabetical order
console.log('Favorite Foods in reverse order: ', favoriteFoods.reverse()); // now reverse the sorted foods array

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

// not exactly sure how this one works, but was able to join food array with join function and add "and" to sepereate them

foods = favoriteFoods.join([separator = ' and ']) 
console.log (foods);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

// Create new array that uses "+" operation to join the two arrays, 
// also added comma to seprate
animalsFoods = animalArray + ',' + favoriteFoods;
console.log(animalsFoods); //print new array