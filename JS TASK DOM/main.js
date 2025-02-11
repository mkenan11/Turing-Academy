"use strict"

//Task1

let myDiv = document.getElementById("myDiv");

console.log(myDiv);

let paragraphs = document.getElementsByClassName("myClass");

console.log(paragraphs);

let allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);

let firstParagraph = document.querySelector("p");

console.log(firstParagraph);

let allSelectedParagraphs = document.querySelectorAll("p");

console.log(allSelectedParagraphs);


//Task2

firstParagraph.onclick = function() {
  firstParagraph.innerText = "I am clicked"; 
};

console.log(firstParagraph);


//Task3

let button1 = document.getElementById("changeColorBtn");

button1.onclick = function() {
  myDiv.style.backgroundColor = "red";
}


//Task4

 let button2 = document.getElementById("addItemBtn");

button2.onclick = function() {
  let list = document.createElement("ul"); 
    
  let listItem1 = document.createElement("li");
  listItem1.innerText = "Item 1"; 
  list.appendChild(listItem1);
  
  let listItem2 = document.createElement("li");
  listItem2.innerText = "Item 2"; 
  list.appendChild(listItem2);

  document.body.appendChild(list);
}

