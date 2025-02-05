"use strict"

//Object

let car = {
    brand : "Toyota",
    model : "Corolla",
    year : 2020,

    getCarInfo: function(){
        return `Car: ${this.brand} ${this.model}`;
    },

    updateYear: function(newYear){
        this.year = newYear;
    },

    displayInfo : function(){
        setTimeout(() => {  
            console.log(`Car : ${this.brand} ${this.model}, Year :  ${this.year}`);
        }, 2000);
    }
}


// console.log(car.getCarInfo());
// car.updateYear(2022);
// console.log(car.year);
car.displayInfo();


