let  First_Name: String;
First_Name = "Umair arshad";
let UperCaseString:String;
let LowerCaseString : String;
let TitleCaseString : String;
UperCaseString =First_Name.toUpperCase();
LowerCaseString =First_Name.toLowerCase();
//TitleCaseString =First_Name.to
console.log(UperCaseString);
console.log(LowerCaseString);

// title case

export{}
// function toTitleCase(name: string): string {
//   const words = name.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }

// function titlecase(s:string):string{
//    return s;
// }

let titleCase = (s:string)=>{
let A = s.toLowerCase().split(" ");
//actually here A is an Array because .split() 
//converting a string a string into an array
// for (let i = 0 ; i < A.length; i ++){
// A[i] = A[i].charAt(0).toUpperCase() + A[i].slice(1);
// // here slice(1) is seperating/slicing a string at 
// //1st index 

// }
// return A.join("");
}

// let myFinalResult = titleCase("UMAir arShad");
// console.log(myFinalResult);

//  let result = titleCase("UMair aRshad");
// console.log(result);