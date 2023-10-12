// ----------------------------------------------- Data types & Variables ------------------------------------------------

// 6 primitive data types

// 1. undefined
// 2. boolean
// 3. number
// 4. String
// 5. bigint
// 6. symbol

// NOTE: bigint and symbol added in EcmaScript

// variables Naming conventions

// 1. starts with letter, $ , _
// 2. do not start with number
// 3. Rest of variable name can include any letter, number, underscore
// 4. can't use special chars , spaces, $ in between.
// 5. case sensitive


var myName = 'Harish';
var myAge = 25;
var isMale = true;

console.log(myName)
console.log(myAge)

console.log(typeof (myName)) // string
console.log(typeof (myAge))  // number
console.log(typeof (isMale)) // boolean

// not declared or defined or not initialized
console.log(typeof (id))  // undefined 


// ---------------------------------------------- 2.Type Casting --------------------------------------------------------------

console.log(10 + "20")  // 1020
console.log(9 - "5") // 4
console.log("Java" + "Script") //JavaScript
console.log(" " + " ") // "  "(space)
console.log(" " + 0)  //  0
console.log("Harish" - "Somsole") //NaN (Not a Number)


console.log(true + true) // 2
console.log(true + false) //1
console.log(true - false) // 1
console.log(false + false) // 0


// ---------------------------------- 3. null vs undefined ------------------------------------------------------

// null
var val1 = null;

// undefined
var val2;

console.log(typeof (val1)) // object
console.log(typeof (val2)) // undefined (data type)


// Note: null is an object and undefined is a data type


// ------------------------------------ 4. What is NaN? ------------------------------------------------------------

// 1. NaN : Not a number
// Global property

var phone = 8989898989
var myName = "Harish"

console.log(isNaN(phone)) // false
console.log(isNaN(myName)) // true



// ------------------------------------ 5. what is === ? ------------------------------------------------------------

// 1. strict operator
// 2. compares two operands including its datatype (value + datatype)

console.log(NaN === NaN) // true
console.log(4 === 4) // true
console.log(4 == '4') // true
console.log(4 === '4') // false


// ----------------------------------- 6. Expressions and Operators -----------------------------------------------

//1. Combination of operators & operands is called Expression.

// Types of Operators:

// 1. Assignment Operator: [=]
// 2. Arithmetic Operators: [+, -, *, /, %, x++, x--, ++x, --x]
// 3. Comparision Operators: [==, !=, < , >, >= <=]
// 4. Logical Operators: [&&, ||, !]
// 5. String Operators/ concatination operator: [+]
// 6. Conditional or Terinary Operator: takes 3 operators (if-else in single line)


// --------------- 1. Program to Swap Two Numbers -----------------------------------------------

var num1 = 10
var num2 = 20


var num1 = num1 + num2
var num2 = num1 - num2
var num1 = num1 - num2

console.log("After Swapping num1 =", num1, "num2 =", num2) // After Swapping num1 = 20 num2 = 10


// ------------------------ Control Statments & Loops ---------------------------------------------------------



// 1. if, if-else, nested-if, if-else
// 2. switch
// 3. while
// 4. do-while
// 5. for
// 6. for in
// 7. for of
// 8. ternary operator



// --------------------- 2. Program to check whether a year is leap year or not ---------------------------------

// year divisible by 4 and 100 is a leap year
// year divisible by 4, 100 , 400 is a leap year

var year = 2020

if (year % 4 === 0) {

    if (year % 100 === 0) {

        if (year % 400 === 0) {

            console.log("Leap Year")
        } else {
            console.log("Not a Leap Year")
        }
    } else {
        console.log("Leap year")
    }
} else {
    console.log("Not a Leap year")
}

// O/P : Leap year



// ----------------------------- 3. Check person is elgible for vote or not using ternary operator -------------------------

age = 10

result = age >= 18 ? "Eligible for Vote" : "Not Eligible for Vote"

console.log(result) // Not Eligible for Vote



// ---------------------------- while loop (executes until the condition is true) ----------------------------------------

var num = 0
while(num <= 10){
    console.log(num)
    num ++
}


// ------------------------- do while (executes the statements first and then checks the condition) ----------------------

var num = 20

do {
    console.log(num)
    num++
}while(num < 20)


// o/p : 20 


// --------------------------------------------- for loop --------------------------------------

for(var i=0;i<=10;i++){
    console.log(i)
}


// ------------------------- 3. write a program to print table for 8 using for loop ---------------------------------

var num = 8

for(var i=1;i<=10;i++){
    console.log(num,"X",i,"=",(num*i))
}

// O/p    

// 8 X 1 = 8
// 8 X 2 = 16
// 8 X 3 = 24
// 8 X 4 = 32
// 8 X 5 = 40
// 8 X 6 = 48
// 8 X 7 = 56
// 8 X 8 = 64
// 8 X 9 = 72
// 8 X 10 = 80


// ------------------------- 4. write a program to print table for 6 using while loop ---------------------------------

var num = 6

var i = 1

while(i<=10){
    console.log(num,"X",i,"=",(num*i))
    i++
}


// -------------------------- 5. Functions (Block of code to perform a specific task by 
//                               reusing the code instead of repeating all statements) -----------------------------------


// create a function to add two numbers

function addition(a,b){
    return a+b
}

console.log(addition(4,5))  //9


// -------------------------------------------- 6. ECMA Script ---------------------------------------------------------------

// to add new features to Javascript,ES is introduced

// ES6 - 2015

// every year some updates are adding in JS (ES6, ES7, ES8, ES9, ES10,ES11...)


// ES6 Features
//-----------------------

// 1. let & const
// 2. template strings
// 3. default arguments
// 4. rest operators
// 5. destructuring
// 6. object properties
// 7. arrow functions
// 8. spread operators

// ----------------- 1. let vs const vs var -----------


// const -> block scope (used only in the blocks but we can't change the value once we assigned, throws error)

// let -> block scope( We can change the value only in blocks)

// var -> function scope (we can change the value from any where)



