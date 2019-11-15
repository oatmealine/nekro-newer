# nekro-new
live another man's life

## Installation
```sh
npm install nekro-new --save
```

## Usage

```javascript
const n = require('nekro');
// creating a human
let nekro = new n.Nekro();

// feeding the human a burger
console.log(nekro.hunger); // -> 20

const burger = n.foods.hamburger;
console.log(nekro.feed(burger)); // -> "yum. delicious"

console.log(nekro.hunger); // -> 10

// making the human sick with bad food
console.log(nekro.sick); // -> false

const cardboard = n.foods.cardboard
console.log(nekro.feed(cardboard)); // -> "i think i got the sickness... wtf..."

console.log(nekro.sick); // -> true

// curing the human
while (nekro.sick) {
  nekro.feed(n.foods.coughSyrup); // 20% chance of curing, increases with each feeding
}
console.log(nekro.sick); // -> false

// death
console.log(nekro.health); // -> 100
console.log(nekro.alive); // -> true

console.log(nekro.hurt(100)); // -> "ow, im fucking dead now"

console.log(nekro.alive); // -> false

// good job. you've successfully commited a murder
// the police will soon arrive at your location
// oh actually, here they are
//
//        🚓
//       🚓
//      🚓
//     🚓
//    🚓
//   🚓
//  🚓
// 🚓
//
// ...
//
// *beeeep* *beep*
// *door knocking*
//
// *door breaking down*
// 👮👮👮 sir/ma'am, you have been arrested for commiting murder.
// 👮👮👮 please step into the car, sir/ma'am, or else force will be applied.
```

## Test 

```sh
npm run test
```