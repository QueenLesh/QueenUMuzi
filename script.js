//task1
//x = 0
// y = 1
// Print the value of x
// Print the value of y

let x= 0;
let y=1;

console.log(x);
console.log(y);

//task 1.1
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y
let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);

//Task 2
// x = 1 + 1 * 2
// y = (1 + 1) * 2
// z = 1 + ( 1 * 2 )
// a =  1 + 1 * 2 / 2
// b =  (1 + 1 * 2 ) /  2

let Resultx = 1 + 1 * 2;
let Resulty = (1 + 1) * 2;
let Resultz = 1 + ( 1 * 2 );
let Resulta =  1 + 1 * 2 / 2;
let Resultb =  (1 + 1 * 2 ) /  2;

console.log(Resultx);
console.log(Resulty);
console.log(Resultz);
console.log(Resulta);
console.log(Resultb);

//Task 3
//Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false.

const Digit = 65;
let One = 6;
let Two = 45;

let Answer = One + Two ;

if (Answer === Digit || One === Digit || Two === Digit){
    console.log("Task 3 true");
}else{
    console.log("Task 3 false");
};


//Task 4
//Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

const alwaysNow = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysNow && Newsum === alwaysNow ){
    console.log("Task 4 true");
}else if (InputTwo === alwaysNow && Newsum === alwaysNow ){
    console.log("Task 4 true");
}else {
    console.log("Task 4 false");
};

//Task 5
//Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.

//This might help: https://www.wikihow.com/Calculate-the-Area-of-a-Triangle

//answer

let b = 3;
let h = 5;
let l = 4
let area = (b+h+l)/2;
console.log(area)

//Task 6
//White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

//Bonus: How can you change the code so it can take in any number of numbers?

//answer

//var points = [10, 45,459];
//document.getElementById("list").innerHTML = points;

//function myFunction() {
 // points.sort(function(a, b){return b-a});
 // document.getElementById("results").innerHTML = points[0];
//}

//MAY YOU KINDLY UNCOMMENT  THIS CODE SO YOU MAY SEE ITS FUNCTIONALITY. THANK YOU.


//Task 7
//Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(145);

//Task 8
//Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)

// answer for Task 8

var hours = 2,
  minutes = 25,
  seconds = 120,
  timeInminutes = (hours * 60) + minutes + (seconds / 60);

console.log('2 hours, 20 minutes and 120 seconds to minutes is', timeInminutes, ' minutes')

//Task 9
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

let multiples = function (n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
      if ((i % 3 == 0) || (i % 5 == 0)) {
          sum += i;
      }
  }
  document.write(sum);
};


multiples(1000);

console.log(sum);

//Task 10
//Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.

// answers Task 10

const vowels = ["a,A,E,e,I,i,O,o,U,u"];
const Name = ["Bokang Lesheba"];
let ans = [];

for(i=0; i<Name.length;i++){
    if(indexOf(Name[i]) === vowels){
        ans.push(Name[i]);
    }
};
console.log(ans)


//not done


//Task 11
//Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

 //answers
 
function findCommonLetters(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let commonLetters = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${commonLetters}`);
}

findCommonLetters('house', 'computers');

