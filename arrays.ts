const carMakers = ["ford", "toyota", "bmw"];
const dates = [new Date(), new Date()];

//  two dimensional array
const carsByMake: string[][] = [];

// Help with inference when extracting value
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomatible value
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()]; // it only can be date or string
importantDates.push("2030-10-10");
importantDates.push(new Date());

let alphas: string[];
alphas = ["1", "2", "3", "4"];
console.log(alphas);

let names = new Array(4);
for (let i = 0; i < names.length; i++) {
  names[i] = i * 2;
  console.log(names[i]);
}

let array_names = new Array("Mary", "Tom", "Jack", "Jill");
for (let i = 0; i < array_names.length; i++) {
  console.log(array_names[i]);
}
