const people = [
  { name: "Bob", age: 30, city: "Builderland" },
  { name: "Charlie", age: 25, city: "Chocoland" },
  {name: "alice", age: 40, city: "aliceland"}
];

// 1. Use for...of to loop through each object in the array
for (const person of people) {
  console.log("---");
  
  // 2. Use for...in to loop through each key inside the current object
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
}