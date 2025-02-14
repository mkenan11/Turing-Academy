"use strict"

//Task 1

let count = 0;
let interval;

document.getElementById("start").addEventListener("click", function(){
    if(!interval){
        interval = setInterval(function(){
            count++;
            document.getElementById("timer").innerText = count;
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
    interval = null;
});


//Task 2


let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function(){
    let taskText = taskInput.value;

    if (taskText !== '') { 
        const li = document.createElement('li'); 
        li.innerText = taskText; 

        taskList.appendChild(li); 
        taskInput.value = '';

    } else {
        alert("Tapşırıq daxil edin!"); 
    }
});






