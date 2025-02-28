"use strict"

function Vehicle(brand, year){
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function(){
    console.log(`1. Brand: ${this.brand}, Year: ${this.year}`);
}

const car = new Vehicle("BMW", 2015);
car.getInfo();


// Car adli constructor yaradiran inheritance from Vehicle

function Car(brand, year, fuelType){
    Vehicle.call(this, brand, year);
    this.fuelType = fuelType;
}


//Car prototype inheritance from Vehicle

Car.prototype = Object.create(Vehicle.prototype);

//Constructora duzelis edirik ki car obyektleri  oz funksiyasina isare etsin vehicle funksiyasina yox

Car.prototype.constructor = Car;

Car.prototype.getInfo = function(){
    console.log(`2. Brand: ${this.brand}, Year: ${this.year}, Fuel Type: ${this.fuelType}`);
}

const myCar = new Car("BYD", 2025, "Plugin-Hibrid");
myCar.getInfo();




