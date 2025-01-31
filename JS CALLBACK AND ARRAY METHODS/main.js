"use strict"

//TASK 1

// function modifyText(text, callback) {
//     return callback(text);
// }

// function toLowerCase(text) {
//     return text.toLowerCase();
// +


// Her sozun ilk Herfini boyuk etmek bilmedim!!!!!!!!

// function removeSpaces(text){
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] !== " ") {
//             result += text[i];
//         }
//     }
//     return result;
// }

// function addExclamationMark(text){
//     return text + "!";
// }


// let kenan = prompt('Enter your text: ');



// console.log(modifyText(kenan, toLowerCase));
// console.log(modifyText(kenan, removeSpaces));
// console.log(modifyText(kenan, addExclamationMark));



//TASK 2

// function modifyNumber(number, callback) {
//     return callback(number);
// }

// function multipleBytwo(number) {
//     return number * 2;
// }

// function divideBytwo(number) {
//     return number / 2;
// }

// function powerOfHalf(number) {
//     if(number > 0){
//         return number ** 0.5
//     }
//     else {
//         return "Please enter a positive number";
//     }
// }

// function absoluteValue(number) {
//     if (number < 0) {
//         return number * -1;  
//     }
//     else {
//         return number;
//     }
// }

// let kenan = prompt('Enter your number: ');

// console.log(modifyNumber(kenan, multipleBytwo));
// console.log(modifyNumber(kenan, divideBytwo));
// console.log(modifyNumber(kenan, powerOfHalf));
// console.log(modifyNumber(kenan, absoluteValue));


//TASK 3

// function transformArray(array, callback) {
//     return callback(array);
// }

// function sumByOne(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + 1);
//     }
//     return result;
// }

// function multiplyByMinus(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]  > 0) {
//             result.push(arr[i] * -1);
//         }
//         else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// function nodeByThree(arr){
//     let result = [];
//     for (let i = 0; i<arr.length; i++){
//         result.push(arr[i] % 3);
//     }
//     return result;
// }

// let kenan = [1, 2, -3, 4, 5, -6, 7, 8, 9, -10];

// console.log(transformArray(kenan , sumByOne));
// console.log(transformArray(kenan , multiplyByMinus));
// console.log(transformArray(kenan , nodeByThree));


//TASK 4

// function findInArray(array, callback) {
//     return callback(array);
// }

// function findFirstEven(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0){
//             return arr[i];
//         }
//     }
//     return "There is no even number in the array";
// }

// function findFirstBiggerThanTen(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 10){
//             return arr[i];
//         }
//     }
//     return "There is no number bigger than 10 in the array";
// }

// function findInBeginWithA(arr){
//     for( let i = 0; i < arr.length ; i++){
//         if (arr[i][0] === "a" || arr[i][0] === "A"){
//             return arr[i];
//         }
//     }
//     return "There is no word starting with A in the array";
// }


// let kenan1 = [1, 33, 4, 15, 6, -7, 8, 9, 10];
// let kenan2 = ["kenan", "KitaB", "33", "yElloW", 1234 , "Alma"];

// console.log(findInArray(kenan1, findFirstEven));
// console.log(findInArray(kenan1, findFirstBiggerThanTen));
// console.log(findInArray(kenan2, findInBeginWithA));



//TASK 5


function processUserData(user , callback){
    return callback(user);
}

function fullName(user){
    return user.firstName + " " + user.lastName;
}

function checkAge(user){
    if(user.age >= 18){
        return true;
    }
    else {
        return false;
    }
}

function hideEmail(user){
    let emailParts = user.email.split("@");
    let stars = "*".repeat(emailParts[0].length);
    let resultEmail = stars + "@" + emailParts[1];
    return resultEmail;
}


let user = {
    firstName: "Kenan",
    lastName: "Mammadov",
    age: 20,
    email: "kenanq@example.com"
};


// console.log(processUserData(user , fullName));
// console.log(processUserData(user, checkAge));
console.log(processUserData(user, hideEmail));






