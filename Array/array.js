// JavaScript code to perform various array operations

// Defining the array
let numbers = [1, 2, 3, 4, 5];
let length = numbers.length;

// Iterating over the elements of an array
console.log("Iterating over the elements of an array: ");
for (let i = 0; i < length; i++) {
  console.log(numbers[i] + " ");
}

// Copying an array
console.log("Copying an array: ");
let copy = [];
for (let i = 0; i < length; i++) {
  copy[i] = numbers[i];
}
for (let i = 0; i < length; i++) {
  console.log(copy[i] + " ");
}

// Resizing an array
console.log("Resizing an array: ");
let newArray = new Array(4);
let newLength = newArray.length;
for (let i = 0; i < length; i++) {
  if (i < newLength) {
    newArray[i] = numbers[i];
  }
}
for (let i = 0; i < newLength; i++) {
  console.log(newArray[i] + " ");
}

// Reversing an array
console.log("Reversing an array: ");
for (let i = 0, j = length - 1; i < j; i++, j--) {
  let temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = temp;
}
for (let i = 0; i < length; i++) {
  console.log(numbers[i] + " ");
}

// Shifting an array left
console.log("Shifting an array left: ");
for (let i = 1; i < length; i++) {
  numbers[i - 1] = numbers[i];
}
numbers[length - 1] = -1;
for (let i = 0; i < length; i++) {
  console.log(numbers[i] + " ");
}

// Shifting an array right
console.log("Shifting an array right: ");
let shiftingArray = [1, 2, 3, 4, 5];
for (let i = length; i > 0; i--) {
  shiftingArray[i] = shiftingArray[i - 1];
}
shiftingArray[0] = -1;
for (let i = 0; i < length; i++) {
  console.log(shiftingArray[i] + " ");
}

// Inserting an element into an array
console.log("Inserting an element into an array: ");
let preArray = [1, 2, 3, 4, 5];
let insertingArray = [];
for (let i = 0; i < length; i++) {
  insertingArray[i] = preArray[i];
}
insertingArray.push(6);
for (let i = 0; i < insertingArray.length; i++) {
  console.log(insertingArray[i] + " ");
}

// Removing an element from an array
console.log("Removing an element from an array: ");
let removingArray = [];
for (let i = 0; i < length; i++) {
  removingArray[i] = insertingArray[i];
}
removingArray.pop();
for (let i = 0; i < removingArray.length; i++) {
  console.log(removingArray[i] + " ");
}

// Removing index 3 from an array:
console.log("Removing index 3 from an array: ");
let removeArray = [];
for (let i = 0; i < length - 1; i++) {
  if (i < 3) {
    removeArray[i] = insertingArray[i];
  } else {
    removeArray[i] = insertingArray[i + 1];
  }
}
for (let i = 0; i < removeArray.length; i++) {
  console.log(removeArray[i] + " ");
}

// Rotating an array left
console.log("Rotating an array left: ");
let rotatingArrayLeft = [1, 2, 3, 4, 5];
let temp = rotatingArrayLeft[0];
for (let i = 1; i < length; i++) {
  rotatingArrayLeft[i - 1] = rotatingArrayLeft[i];
}
rotatingArrayLeft[length - 1] = temp;
for (let i = 0; i < length; i++) {
  console.log(rotatingArrayLeft[i] + " ");
}

// Rotating an array right
console.log("Rotating an array right: ");
let rotatingArrayRight = [1, 2, 3, 4, 5];
temp = rotatingArrayRight[length - 1];
for (let i = length - 1; i > 0; i--) {
  rotatingArrayRight[i] = rotatingArrayRight[i - 1];
}
rotatingArrayRight[0] = temp;
for (let i = 0; i < length; i++) {
  console.log(rotatingArrayRight[i] + " ");
}
