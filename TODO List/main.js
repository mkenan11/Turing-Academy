"use strict"

// const addButton = document.getElementById('addButton');
// const textInput = document.getElementById('textInput');
// const todoContainer = document.getElementById('todoContainer');

// addButton.addEventListener('click', function() {
//     const text = textInput.value.trim();
//     if (text !== '') {
//         const task = document.createElement('div');
//         task.classList.add('task');

//         const taskText = document.createElement('span');
//         taskText.textContent = text;

//         const deleteIcon = document.createElement('span');
//         deleteIcon.textContent = '❌';
//         deleteIcon.style.cursor = 'pointer';
//         deleteIcon.style.marginLeft = '10px';
//         deleteIcon.addEventListener('click', function() {
//             todoContainer.removeChild(task);
//         });

//         task.appendChild(taskText);
//         task.appendChild(deleteIcon);
//         todoContainer.appendChild(task);

//         textInput.value = '';
//     }
// });

const addButton = document.getElementById('addButton');
const textInput = document.getElementById('textInput');
const todoContainer = document.getElementById('todoContainer');

addButton.addEventListener('click',function(){
    const text = textInput.value.trim();
    if(text !== ''){
        const task = document.createElement('div');
        task.classList.add('task');
        const taskText = document.createElement('span');
        taskText.textContent = text;
        taskText.classList.add('taskText');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('trash');
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginLeft = '10px';
        deleteIcon.addEventListener('click', function() {         
            todoContainer.removeChild(task);
        });

        task.appendChild(taskText);
        task.appendChild(deleteIcon);
        todoContainer.appendChild(task);
        textInput.value = '';
    }

});

textInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});