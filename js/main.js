console.log("Hello, World!")


let a = 1, b = 2;
console.log({ a: a, b: b });

[a, b] = [b, 20];

console.log("After swapping:", { a: a, b: b });
console.log("------------------------------------------\n");



5 === 5; // true — strict equals (use this one)
5 == "5"; // true — loose equals, avoid it
5 === "5";  // false — strict equals, different types
5 !== 6; // true — not equal

// ! = =

const hour = 14;

if (hour < 12) {

    console.log("Good morning");
} else if (hour < 18) {

    console.log("Good afternoon");
} else {

    console.log("Good evening");
}


// ---------------------------------------------- //
const age = 20;

const label = age >= 18 ? "adult" : "minor";
console.log("Label:", label);

var label2;
if (age >= 18) {
    label2 = "adult";
} else {
    label2 = "minor";
}

console.log("Label2:", label2);

// switch — clean way to handle many exact cases

const day = "Mon";

switch (day) {
    case "Sat":
    case "Sun":
        console.log("Weekend");
        break;
    case "Mon":
        console.log("Monday");
        break;
    default:
        console.log("Weekday");
}

// ---------------------------------------------- // loops



for (let i = 1; i <= 3; i++) {

    if (i === 2) {
        console.log("Skipping lap " + i);
        break; // exit the loop
    }
    console.log("Lap " + i);
}


// while — when you don't know how many times
let stock = 3;
while (stock > 0) {
    stock--;

    console.log("Stock left: " + stock);
}

// for...of — the easiest way to loop over an array

var fruits = ["apple", "pear", "banana"];

for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function (fruit) {

    console.log("Using foreach loop: ", fruit);
});



// ---------------------------------------------- // functions

// 1. classic function declaration
function greet(name) {
    return "Hi, " + name;
}
// 2. function expression — stored in a variable
const sayBye = function (name) {
    return "Bye, " + name;
};
// 3. arrow function — shorter, very common today
const add = (a, b) => a + b;
// 4. method — a function that lives inside an object
const bot = {
    reply() { return "beep boop"; }
};
console.log(greet("Tim")); // "Hi, Tim"
console.log(add(2, 3)); // 5
console.log(bot.reply()); // "beep boop"

// ---------------------------------------------- // arrays
const nums = [4, 8, 15, 16];
nums.push(23); // add to the end
nums.length; // 5
console.log("Nums:", nums);



const fruits_ = ["pear", "apple", "mango"];

console.log("Fruits:", fruits_);
console.log("Includes mango:", fruits_.includes("mangos"));

const user = {
    name: "Tim",
    role: "developer",
    permissions: ["read", "write"],
    greet() {
        return `Hi, I'm ${ this.name }`;
    }
}

console.log("Object: ", user.name);

var permissions = user.permissions;

console.log("Permissions: ", permissions);

permissions.forEach(function (permission) {
    console.log("Permission: ", permission);
});



// ---------------------------------------------- // json

