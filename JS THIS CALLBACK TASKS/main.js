"user strict"

let Fragrance = {
    Id : 12345,
    Brand : "Dior",
    Model : "Homme Intense", 
    Season : "Winter",
    Longevity : "3",
    Sillage : "4",
    Notes : [ "Alma", "Nanə", "Limon", "Zəfəran", "Vanil", "Darçın" ]
}


let Fragrance1 = {
    Id : 23456,
    Brand : "By Killian",
    Model : "JAzz Club", 
    Season : "All Seasons",
    Longevity : "1",
    Sillage : "2",
    Notes : [ "Alma", "Nanə", "Limon", "Zəfəran", "Vanil", "Darçın" ]
}

let Fragrance2 = {
    Id : 34567,
    Brand : "YSL",
    Model : "Ya Male Elixir", 
    Season : "Spring",
    Longevity : "2",
    Sillage : "3",
    Notes : [ "Alma", "Nanə", "Limon", "Zəfəran", "Vanil", "Darçın" ]
}



//TAsk1


// function updateFragranceInfo(id,property,value){
//     let fragrance = fragrances.find(fragrance => fragrance.Id === id);
//     fragrance[property] = value;
//     console.log(fragrance);
    
// }

// updateFragranceInfo(12345,"Brand","YSL")


//TAsk2


// 

// function displayInfo(id){
//     for(let i = 0; i < fragrances.length; i++){
//         if(fragrances[i].Id === id){
//             console.log(fragrances[i]);
//         }
//     }
// }

// console.log("Loading...");

// setTimeout(() => {
//     console.clear();
//     console.log(displayInfo(12345));
// }, 3000);


//Task3

// let fragrances = [Fragrance,Fragrance1,Fragrance2]


// function listFragranceNotes(id){
//     let fragrance = fragrances.find(fragrance => fragrance.Id === id);
//     console.log(fragrance.Notes);
// }

// listFragranceNotes(12345);


//Task4

// let fragrances = [Fragrance,Fragrance1,Fragrance2]

// function processFragranceName(id,callback){
//     let fragrance= fragrances.find(fragrance => fragrance.Id === id);
//     let result = callback(fragrance.Brand)
//     return result;
// }

// function nameToUppercase(name){
//     return name.toUpperCase();
    
// }

// function capitalizeNameLastLetter(name){
//     let lastLetter = name[name.length - 1];
//     return name.substring(0,name.length - 1) + lastLetter.toUpperCase();
// }

// console.log(processFragranceName(12345,nameToUppercase));
// console.log(processFragranceName(23456,capitalizeNameLastLetter));





