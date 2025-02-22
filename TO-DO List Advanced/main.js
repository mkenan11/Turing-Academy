"use strict"



// const addButton = document.getElementById('addButton');
// const textInput = document.getElementById('textInput');
// const todoContainer = document.getElementById('todoContainer');

// addButton.addEventListener('click',function(){
//     const text = textInput.value.trim();
//     if(text !== ''){
//         const task = document.createElement('div');
//         task.classList.add('task');
//         const taskText = document.createElement('span');
//         taskText.textContent = text;
//         taskText.classList.add('taskText');
//         const deleteIcon = document.createElement('i');
//         deleteIcon.classList.add('trash');
//         deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
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

// textInput.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         addButton.click();
//     }
// });


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
//         taskText.classList.add('taskText');

//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.classList.add('edit-btn');

//         const deleteIcon = document.createElement('i');
//         deleteIcon.classList.add('trash');
//         deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deleteIcon.style.cursor = 'pointer';
//         deleteIcon.style.marginLeft = '10px';

//         deleteIcon.addEventListener('click', function() {
//             todoContainer.removeChild(task);
//         });

//         editButton.addEventListener('click', function() {
//             const inputField = document.createElement('input');
//             inputField.type = 'text';
//             inputField.value = taskText.textContent;
//             inputField.classList.add('edit-input');

//             task.replaceChild(inputField, taskText);
//             inputField.focus();

//             const saveButton = document.createElement('button');
//             saveButton.textContent = 'Save';
//             saveButton.classList.add('save-btn');

//             task.replaceChild(saveButton, editButton);

//             saveButton.addEventListener('click', function() {
//                 taskText.textContent = inputField.value;
//                 task.replaceChild(taskText, inputField);
//                 task.replaceChild(editButton, saveButton);
//             });
//         });

//         task.appendChild(taskText);
//         task.appendChild(editButton);
//         task.appendChild(deleteIcon);
//         todoContainer.appendChild(task);
//         textInput.value = '';
//     }
// });

// textInput.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         addButton.click();
//     }
// });



const addButton = document.getElementById('addButton');
const textInput = document.getElementById('textInput');
const todoContainer = document.getElementById('todoContainer');

addButton.addEventListener('click', function(){
    const text = textInput.value.trim();
    if(text!==''){
        const task = document.createElement('div');
        task.classList.add('task');

        const taskText = document.createElement('span');
        taskText.textContent = text;
        taskText.classList.add('taskText');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add("trash");
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginLeft = '10px';

        deleteIcon.addEventListener('click', function(){
            todoContainer.removeChild(task);
        });

        editButton.addEventListener('click', function(){
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = taskText.textContent;
            inputField.classList.add('edit-input');

            task.replaceChild(inputField, taskText);
            inputField.focus();

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('save-btn');

            task.replaceChild(saveButton, editButton);

            saveButton.addEventListener('click', function(){

                
                taskText.textContent = inputField.value;
                task.replaceChild(taskText, inputField);
                task.replaceChild(editButton, saveButton)
            });

        });

        task.appendChild(taskText);
        task.appendChild(editButton);
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
