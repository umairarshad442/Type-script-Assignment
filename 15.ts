let guest_list = ["Ali", "Umer", "Ahmad"];
for (let abc of guest_list) {
    console.log(`Hi ${abc} !I would like you to join me on dinner at my house`);
}
console.log(guest_list[0]); // name of person who can't make the dinner
let skippedPerson = guest_list[0];
console.log(`I regret to inform you ${skippedPerson} will not be able to join us
here is a new list of people who'll be with us
`)
guest_list[0]="Kamran"; // replacing the name of the guest who can’t make it 
for(let i of guest_list){
    console.log(`Hi ${i} ! You are invited for dinner at my home`); //print new invitations
}
export{}