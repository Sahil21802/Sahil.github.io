// function Callme() {
//     console.log("Calling itself")
//     Callme();
// }

// Callme();

// function Changename(user0, user1, user2) {
//     let user = [];
//     user[0]= "Sahil";
//     user[1]= "Sector 45";
//     user[2]= 12345678;
//     // console.log(user)
//     user[0] = user0;
//     console.log(user)

// }
// Changename("jai");


//create the object named="user" such as name address phone 
//create a new field named = "hobbies" such as singing,dancing and so on
//create a function the value passing the name address phone and passing the fourth element that i will add in array.

// Creating the user object
let user = {
    name: "Sahil",
    address: "Sector 45A",
    phone:12345678,
    hobbies: ["singing","dancing"]
};

function addUserHobby(name, address, phone, newHobby) {
    user.hobbies.push(newHobby);
}


addUserHobby(user.name, user.address, user.phone, "gaming");

console.log(user);





