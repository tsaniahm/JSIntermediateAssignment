//NO 1
// const person = {
//     name: "person A",
//     age: 100,
//     favDrinks: [
//       "coffee",
//       "jamu temulawak",
//       "tea"
//     ],
//     greeting: function(name) {
//       return `hello world, ${name}`
//     }
//   }
  
//   /// EDIT HERE
//   person.name = 'Tsaniah Munfidah'
//   person.favDrinks[1] = 'tap water'
  
//   /// STOP
  
//   console.log(person.name);
//   console.log(person.age);
//   console.log(person.favDrinks);
//   console.log(person.greeting("John Watson"));
  
  //NO 2 I DONT KNOW HOW TO PUT OBJ N PATH TOGETHER
// function getObjectValue(obj, path) { 
//     console.log(path)
//     return Object.values(obj)
// }

// const milkBasedCoffee = {
//   name: "latte",
//   ingredients: {
//     espresso: {
//       origin: "lampung",
//       roastProfile: "medium to dark"
//       //ratio: 1
//     },
//     milk: {
//       brand: "susu murni",
//       isVegan: false,
//       ratio: 5
//     }
//   },
// }

// const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
// const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
// const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

// console.log(espresso);
// console.log(coffeeBrand);
// console.log(isMilkVegan)

//NO 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
  }
  
  console.log(calculateIncome(items))