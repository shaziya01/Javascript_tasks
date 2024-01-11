// console.log('hii');
// document.write('hii');

// if (Math.random() > 0.5){
//     var x = 10;
// }
// console.log(x);

// if (true){
//     var x = 5;
// }
// console.log(x);

// console.log(x === undefined); // true
// var x = 3;

// (function () {
//   console.log(x); // undefined
//   var x = "global value";
// })();

// const MY_OBJECT = { key: "value" };
// MY_OBJECT.key = "otherValue";

// var a = "37";
// var b = "30";
// var c = a - b;
// console.log(c);

// const array = ['shaziya','shaan','sonu']


const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota



function checkData() {
    if (document.form1.threeChar.value.length === 3) {
      return true;
    } else {
      alert(
        `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
      );
      return false;
    }
  }
  




