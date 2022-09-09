const now = new Date(Date.now());
console.log('The current time is ');
console.log(now.toDateString());

console.log("Today's date: " + now.getDate());
console.log("Current Month " + now.getMonth());
console.log("Current Year: " + now.getFullYear());


console.log("Check Day of Birth")
const BirthDay = new Date('September 30, 2003 21:00:00');
const Bday = BirthDay.getDay();

console.log(Bday);
