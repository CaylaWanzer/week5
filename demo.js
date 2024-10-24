
// functional programing treat functions as values (a data type)

const car = {
    location: 1000,
    speed: 10,
    drive: (car) => car.location += car.speed

}
console.log(car.location) //before
car.drive(car);
car.drive(car);
car.drive(car);
car.drive(car);
car.drive(car);
console.log(car.location) //after

let location = 111
let speed = 10
console.log("LOCATION BEFORE:", location)
location += speed
location += speed
location += speed
location += speed
location += speed

console.log("LOCATION AFTER:", location)
