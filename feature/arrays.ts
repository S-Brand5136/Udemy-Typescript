const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with infereance when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomapitble values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDate: (Date | string)[] = [new Date()];
importantDate.push("2030-10-10");
