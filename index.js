
/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;
if (votingAge > 18) {
    console.log("you are old enough to vote!")
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let voterAge = prompt ("How old are you?");

if (voterAge >= 18){
console.log("you are old enough to vote!")
}
else {
console.log("you are not old enough to vote :'(")
}
console.log(voterAge);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
parseInt("1999");
console.log("1999");




//Task d: Write a function to multiply a*b 
function MULTIPLY(a, b) {
    return a * b;
}

let product = MULTIPLY(5, 3);
console.log(product);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function DogYears(a, b){
    return a * b;
}

let myAge = DogYears(25, 7);
console.log(myAge);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let userChoice = prompt ("Do you choose rock, paper or scissors?");
console.log(userChoice);

let botChoice = Math.random();

if (botChoice <= 0.33) {
    console.log("rock");
} else if (botChoice <= 0.66) {
    console.log("paper");
} else {
    console.log("scissors");
}



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometers = parseInt(prompt("Please enter kilometers:"));
let miles = kilometers / 1.6;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = parseInt(prompt("Please enter feet:"));
let centimeters = feet * 30.48;
console.log(centimeters + " centimeters");




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  let bottles;
 for (counter = 99; counter >= 1; counter = counter - 1) 
{
     if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of soda on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of soda on the wall.");
    }
    console.log(counter+" "+bottles+" of soda.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of soda on the wall.");
    }
} 




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





