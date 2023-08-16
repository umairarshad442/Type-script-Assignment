// Part 1
 let Locations = ["Paris", "Newyork", "London", "Sydney", "Rome"];
 console.log("array in its original order.");
 console.log();
 console.log(Locations)
 for(let i of Locations){
    console.log(i); }

export{}
//Part 2
console.log();
let sortedLocations = [...Locations].sort();
console.log(sortedLocations);
console.log("Sorted Array.");
for (let i of sortedLocations){
    console.log(i)
};

//Part 3
console.log();
console.log("Here you can see my orignal Array is unchange");
console.log();
console.log(Locations);

//Part 4

console.log();
console.log("Here you can see reversely sorted array");
let reverseSortedLocations = [...Locations].sort((a,b) => b.localeCompare(a));
console.log(reverseSortedLocations);

//Part 5
console.log();
console.log("Here you can see my orignal Array is unchange");
console.log();
console.log(Locations);

//Part 6
console.log();
console.log("Here you can see reversely sorted Orignal array");
Locations = Locations.sort((a,b) => b.localeCompare(a));
console.log(Locations);

//Part 7
console.log();
console.log("Here you can see reverse back Orignal array in its actual form");
Locations = Locations.sort((a,b) => a.localeCompare(b));
console.log(Locations);