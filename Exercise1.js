// 1. Multiply 3 distinct numbers
function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multiply(2, 3, 4)); // Output: 24


// 2. Function expression to convert minutes to seconds
const convertToSeconds = function(minutes) {
  return minutes * 60;
};
console.log(convertToSeconds(5)); // Output: 300


// 3. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
console.log(fahrenheitToCelsius(68)); // Output: 20


// 4. Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"


// 5. Count the number of vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Javascript')); // Output: 3


// 6. Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Testing isPrime with 4 numbers
console.log(isPrime(2)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(1)); // Output: false

