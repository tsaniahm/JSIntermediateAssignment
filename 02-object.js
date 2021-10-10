//NO 1 DONE
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(name) {
      return `hello world, ${name}`
    }
  }
  
  /// EDIT HERE
  person.name = 'Tsaniah Munfidah'
  person.favDrinks[1] = 'tap water'
  
  /// STOP
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  
