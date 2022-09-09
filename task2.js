let cars = ['BMW', 'Toyota', 'Tesla', 'Ferrari'];
console.log(cars);

console.log(cars.find((car) => car === 'Tesla'));  

console.log(cars.findIndex((car) => car === 'Toyota')); 

console.log(cars.push('Audi'));
console.log((cars));

console.log(cars.pop('Ferrari'));
console.log((cars));

let numbers = [19,66,27,99,51,88,79,33]

console.log(numbers.sort());
numbers.forEach((number) => console.log(number)); 