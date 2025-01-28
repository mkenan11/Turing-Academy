// Task1

// "use strict";

//  let kenan = +(prompt("Ədəd Daxil Et!"));

// function isEven(eded) {
//     if (eded % 2 === 0) {
//         return "True";
//     } else if (eded % 2 === 1) {
//         return "False";
//     } else {
//         return "Eded daxil et!";
//     }
// }
// alert(isEven(kenan));


// Task2

// let a = +(prompt("Enter the a"))
// let b = +(prompt("Enter the b"))
// let c = +(prompt("Enter the c"))


// function findLargest(a,b,c){

//     if(a>b && a>c){
//         return "a is the Largest";
//     }
//     else if(b>a && b>c){
//         return "b is the largest";
//     }
//     else if(c > a && c > b){
//         return "c is the largest";
//     }
// }

// alert(findLargest(a,b,c));


// Task3


// let kenan = prompt("Enter the Word")

// function countVowels(str){
//     let count =  0;

//     for( let i = 0; i < str.length ; i++){
//         let char = str[i];

//         if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
//             count++;
//         }
//     }
//     return count;

// }

// alert(`Numbers of vowels is : ${countVowels(kenan)}`)


// Task4 

// let kenan = prompt("Enter the word")

// function reverseString(str) {
//     let reversed = '';
    
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// alert(`Reversed word is : ${reverseString(kenan)}`); 


// Task5

// function multipliicationTable(number){
//     let num;
//     for(let i = 1; i <= 10 ; i++){
//         num = number * i;
//         console.log(`${number} * ${i} = ${num}`);
//         num = 1
//     }
// }

// multipliicationTable(5)


// Task 6


// let kenan = +(prompt("Enter the number :"))

// function factorial(number){
//     if(number === 1 || number === 0){
//         return 1;
//     }
//     else {
//         return number * factorial(number-1);
//     }
// }

// alert(`${kenan}! = ${factorial(kenan)}`)

