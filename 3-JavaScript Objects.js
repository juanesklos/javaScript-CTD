//---------- OVERVIEW AND INSTRUCTIONS ----------

//-------------------------------------------
// LESSON 3 OBJECTS
//-------------------------------------------

//# JavaScript Objects
// This is the coding assignment for the third week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Object Basics
//   - Primitive vs Object Types
//   - Object De-structuring
//   - Manipulating Objects

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. You'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console on this screen. Check to make sure that the output you get in your Console is the expected output.

// ---------- QUESTION 1 ----------
// Objects are a way to store property:value pairs of data in a variable.  
// First, create an object called 'myPet'.  Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values.  
// Use your console.log's to print the values of each property to the console.

// EXAMPLE LOG:
//    console.log("Q1 name: ", myPet.name);
//    console.log("Q1 species: ", myPet.species);
//    console.log("Q1 color: ", myPet.color);
// EXAMPLE OUTPUT:
//    Q1 name: Teddy
//    Q1 species: ferret
//    Q1 color: brown

// PUT YOUR CODE HERE
console.log("Q1-------Start---------");
let myPet = {
    name: "Fito",
    species: "Dog",
    color: "Red"};

console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);
console.log("Q1-------End---------");
console.log();


// ---------- QUESTION 2 ----------
// Now let's see how we can use the property:value pairs in template literals.  
// Create a variable called 'aboutPet' and assign it a template literal that uses the 'myPet' object to make a sentence sharing all the pet details.  
// The sentence should look something like this: "Teddy is a brown ferret."

// EXAMPLE LOG:
//    console.log("Q2: ", aboutPet);
// EXAMPLE OUTPUT:
//    Q2: Teddy is a brown ferret.

// PUT YOUR CODE HERE
console.log("Q2-------Start---------");
let aboutPet = `${myPet.name} is a ${myPet.color} ${myPet.species}`;
console.log("Q2: ", aboutPet);
console.log("Q2-------End---------");
console.log();

// ---------- QUESTION 3 ----------
// Let's add a method to our object.  Create a method called 'age' that takes no parameters, and uses no outside variables (hint: use 'this').  
// The method should return the age of the pet in years.

// EXAMPLE LOG:
//    console.log("Q3: ", myPet.age());
// EXAMPLE OUTPUT:
//    Q3: 7

// PUT YOUR CODE HERE
console.log("Q3-------Start---------");
myPet.age = 7;
myPet.age = function(){
    return this.age;
}
console.log("Q3: ", myPet);
console.log("Q3: ", myPet.age());
console.log("Q3-------End---------");
console.log();
// Don't forget your console.logs!

// ---------- QUESTION 4 ----------
// Now, let's see how we can use data within objects in functions.  Write a function called 'isDog' that takes one object parameter.  
// In the function, create a variable called 'speciesChecker' and assign it the value 'dog'. 
// Then, still in the function, return true if the object's species value is equal to the variable 'speciesChecker', or false if not.

// EXAMPLE LOG:
//    console.log("Q4: ", isDog(myPet));
// EXAMPLE OUTPUT: (if your 'myPet' object from Question 1 is about any animal other than a dog)
//    false
// NOTE: if when you made 'myPet' in Question 1, you did put dog as species, you should get true as your output instead.

// PUT YOUR CODE HERE
console.log("Q4-------Start---------");

function isDog(objeto){
    let speciesChecker = "Dog";
    if(objeto.species == speciesChecker){
        return true;
    }
    return false;

}

console.log("Q4: ", isDog(myPet));

console.log("Q4-------End---------");
console.log();

// ---------- QUESTION 5 ----------
// Now lets work with date and time
// Create a function called 'month'.  Inside the function, declare a variable named 'today' that uses the Date object.  
// Your function should then return only the month of the 'today' variable.  You can return the month as a number
// STRETCH GOAL: Return the month as a string

// EXAMPLE LOG:
//    console.log("Q5: ", month());
// EXAMPLE OUTPUT: (Will be different for each class but should be the current month.  For example if you're doing this assignment in January...)
//    Q5: 01
//    stretch goal should result in:
//    Q5: January

// PUT YOUR CODE HERE
console.log("Q5-------Start---------");
function month(){
    let today = new Date();
    return today.getMonth();
}
console.log("Q5: ", month());
console.log("Q5-------End---------");
console.log();


console.log("Q5 Stretch Goal-------Start---------");
function monthString(){
    let today = new Date();
    const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    return months[today.getMonth()];
}
console.log("Q5: Stretch Goal ", monthString());
console.log("Q5 Stretch Goal -------End---------");
console.log();


// ---------- QUESTION 6 ----------
// Let's explore dates now.  Create a variable named 'birthday' and assign it the date of your next birthday.  
// Then create a function called 'birthdayCountdown' that takes birthday as a parameter and returns the number of days until your next birthday.  
// Remember that you may need to use a particular format for your birthday so you can properly convert the data to something you can use in the function.  
// CAUTION: 2024 is a leap year!

// STRETCH GOAL: As we mentioned in Question 8, you should consider boundary cases. What if the date wasn't formatted to work with your function?

// EXAMPLE LOG:
//    console.log("Q6: ", birthdayCountdown(birthday));
// EXAMPLE OUTPUT: (if your next birthday was March 15, 2024 and today was February 3, 2024)
//    Q6: 41

// PUT YOUR CODE HERE
console.log("Q6-------Start---------");


let initDate = new Date().getTime();
//console.log("initDate :", new Date());
let birthday = new Date('2026-3-10').getTime();
//console.log("birthday :", new Date('2026-3-10'));


function birthdayCountdown(birthdayParameter){
    //console.log("birthdayParameter :", birthdayParameter);
    var diff = birthdayParameter - initDate;
    return Math.round (diff/(1000*60*60*24)); // (1000*60*60*24) --> miliseconds -> seconds -> minutes -> hours -> day
}

console.log("Q6: ", birthdayCountdown(birthday));
console.log("Q6-------End---------");
console.log();

// Set the date for the next birthday (YYYY-MM-DD format)

// ---------- QUESTION 7 ----------
// If we work with dates, we should work with time also.  Create a variable named 'startTime' and assign it a start time.  
// Create a variable named 'endTime' and assign it an end time.  Then create a function called 'timeDifference' 
// that takes startTime and endTime as parameters and returns the number of hours and minutes between the start and end times.  
// Remember that you may need to be careful what format you use when entering times so you can properly convert the data to something 
// you can use in the function.

// STRETCH GOAL: You should consider boundary cases. What if the times are not formatted to work with your function?

// EXAMPLE LOG:
//    console.log("Q7: ", timeDifference(startTime, endTime));
// EXAMPLE OUTPUT: (if startTime was 12:37pm and endTime was 3:19pm)
//    Q7: 2 hours and 42 minutes

// PUT YOUR CODE HERE
console.log("Q7-------Start---------");

let startTime = new Date('2025-11-10T10:40:00');;
let endTime = new Date('2025-11-10T11:50:00');

function timeDifference(startTimeParam, endTimeParam){
    var startHour  = startTimeParam.getTime();
    var endHour  = endTimeParam.getTime();

    var diffHours = endHour - startHour; //
    //console.log("Q7 diffHours : ", diffHours);

    var hours = diffHours/(1000*60*60);
    //console.log("Q7 hours : ", hours);
    var minutes = hours - Math.trunc(hours); //I get the integer part from hours.
    //console.log("Q7 minutes : ", minutes);
    minutes = Math.floor(minutes * (60)); // I change the value to minutes.
    //console.log("Q7 minutes 2: ", minutes);


    return `${Math.floor(hours)} hours and ${minutes} minutes`;

}
console.log("Q7: ", timeDifference(startTime, endTime));
console.log("Q7-------End---------");
console.log();

// ---------- QUESTION 8 ----------
// Create a function called 'absDiff' that takes 2 parameters and returns the absolute difference between them. For example, 
// if the first parameter is smaller than the second, the first parameter will be subtracted from the second. 
// If the first parameter is larger than the second, the second parameter will be subtracted from the first. 
// If they are both equal, return the first parameter subtracted by the second. 
//  It's important to consider boundary cases - situations that may change how you expect your code to behave.  
// For this reason, work with same numbers and negative numbers as well to see if you get your absDiff function to calculate the absolute difference regardless of number type.

// EXAMPLE LOG 1:
//    console.log("Q8 first larger: ", absDiff(29, 5));
// EXAMPLE OUTPUT: (if using the numbers 29 and 5 as in the example log)
//    Q8 first larger: 24
// EXAMPLE LOG 2:
//    console.log("Q8 second larger: ", absDiff(3, 16));
// EXAMPLE OUTPUT: (if using the numbers 3 and 16 as in the example log)
//    Q8 second larger: 13
// EXAMPLE LOG 3:
//    console.log("Q8 same nums: ", absDiff(5, 5));
// EXAMPLE OUTPUT 3: (if using the numbers 5 and 5 as in the example log)
//    Q8 same nums: 0
// EXAMPLE LOG 4:
//    console.log("Q8 neg num: ", absDiff(-6, 5));
// EXAMPLE OUTPUT 4: (if using the numbers -6 and 5 as in the example log)
//    Q8 neg num: 11

// PUT YOUR CODE HERE
console.log("Q8-------Start---------");

let absDiff = function(value1, value2){

    let response = 0;
    
    if(value1 >= value2){
        response = value1 - value2;
    }else if(value1 < value2){
        response = value2 - value1;
    }
    return response;

}

console.log("Q8 first larger: ", absDiff(29, 5));
console.log("Q8 second larger: ", absDiff(3, 16));
console.log("Q8 same nums: ", absDiff(5, 5));
console.log("Q8 neg num: ", absDiff(-6, 5));
console.log("Q8-------End---------");
console.log();
// ---------- QUESTION 9 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//    Q9 convertTemp: 0 32
// Create logs for several different celsium temperatures

// PUT YOUR CODE HERE
console.log("Q9-------Start---------");


let celsiusTemp = 0;
let FahrenheitTemp = 0;
let convertTemp = function(celciusTemperature){
    console.log("Q9 celsius : ", celciusTemperature);
    FahrenheitTemp =  (celciusTemperature * 1.8) + 32;
    console.log("Q9 Fahrenheit : ", FahrenheitTemp);    
    return FahrenheitTemp;

}

console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
console.log("Q9-------End---------");
console.log();

// ---------- QUESTION 10 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q10 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//    Q10 reverseString: HelloWorld dlroWolleH

// PUT YOUR CODE HERE
console.log("Q10-------Start---------");

let inputString = "HelloWorld";
let reverseString = function(stringIn){
    //console.log("Q10 stringIn : ", stringIn);
    const arrayString = stringIn.split('');
    //console.log("Q10 stringIn Split: ", arrayString);

    let arrayReverse = "";
    console.log("Q10 lenght: ", arrayString.length);
    for(let i = arrayString.length - 1; i >= 0 ; i--){
        //console.log("Q10 : ", i);
        arrayReverse += arrayString[i];
    }

    return arrayReverse;

}

console.log("Q10 reverseString: ", inputString, reverseString(inputString));
console.log("Q10-------End---------");
console.log();

// ---------- QUESTION 11 ----------
// Declare a variable named "diameter" and assign it an integer value. 
// Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), 
// the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) 
// and the "area" (which is the Math value pi, multiplied by the radius squared).

// PUT YOUR CODE HERE
console.log("Q11-------Start---------");

let diameter = 5;
console.log("Q11 diameter : ", diameter);
let radius  =  diameter/2;
console.log("Q11 radius : ", radius);
let circumference = 2 * Math.PI * radius;
console.log("Q11 circumference : ", circumference);
let area = Math.PI * Math.pow(radius, 2);
console.log("Q11 area : ", area);

console.log("Q11-------End---------");
console.log();

// Don't forget your console.logs!

// ---------- QUESTION 12 ----------
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". 
// Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. 
// Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. 
// Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.

// PUT YOUR CODE HERE
console.log("Q12-------Start---------");

const billTotal = 35.75;
console.log("Q12 billTotal: ",billTotal);

const tipPercentage = 0.2;
console.log("Q12 tipPercentage : ",tipPercentage);

const tip = (tipPercentage * billTotal);
console.log("Q12 tip : ",tip);

const billTip = billTotal + tip;
console.log("Q12 BillTotal with Tip : ", billTip);

console.log("Q12-------End---------");
console.log();

// Don't forget your console.logs!

// ---------- QUESTION 13 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' 
// that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).
// EXAMPLE LOG:
//    console.log("Q13: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q13: 10

// PUT YOUR CODE HERE
console.log("Q13-------Start---------");

const num1 = 5;
const num2 = 2;

let multiplyThese = function(param1, param2){
    return param1 * param2;
}
console.log("Q13: ", multiplyThese(num1, num2));
console.log("Q13-------End---------");
console.log();

// ---------- QUESTION 14 ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters 
// and returns their average (hint: there is no built-in average operator in JavaScript). 
//  Use the variables (num1 and num2) you created in the last question to test your function.  
// NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  
// We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q14: ", getAverage(num1, num2));
// EXAMPLE OUTPUT: (based on num1 and num2 above)
//    Q14: 3.5

// PUT YOUR CODE HERE
console.log("Q14-------Start---------");


let getAverage = function(param1, param2){
    return (param1 + param2) / 2;
}
console.log("Q14: ", getAverage(num1, num2));
console.log("Q14-------End---------");
console.log();
// Create the function to calculate the average