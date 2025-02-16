//Task 1

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];

// const addArr = [0, ...arr1, ...arr2, 10];

// console.log(addArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Task 2

// function averageGrade(...grades) {
//     if (grades.length === 0) {
//         return null;
//     }
//     const sum = grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / grades.length;

// }

// console.log(averageGrade(1, 2, 3, 4, 5, 6, 7));

//Task 3

 function convertToObj(...arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

console.log( convertToObj(["name", "John Doe"], ["age", 17] , ["city", "Lviv"] , ["country", "Ukraine"])); // { name: 'John Doe', age: 17, city: 'Lviv', country: 'Ukraine' }

