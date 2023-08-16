// Question # 3: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.



let Name;
Name = "Umair arshad";
let uppercase;
let lowecase;
let TitleCaseString;
uppercase = Name.toUpperCase();
lowecase = Name.toLowerCase();


//for title case
let A = Name.toLowerCase().split(" "); // ["umair", "arshad"]
let titlecase;
for(let i=0; i < A.length; i++ ){
A[i] = A[i].charAt(0).toUpperCase() + A[i].slice(1); // ["Umair", "Arshad"] split(" ") splits the lowercase name 
titlecase = A.join(" "); // "Umair Arshad" join(" ") joins all the elements in the words array back into a single string, separated by spaces.
}


console.log(uppercase);
console.log(lowecase);
console.log(titlecase);