const drank = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type annotation
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", false, 0];
const tea: Drink = ["brown", false, 0];
