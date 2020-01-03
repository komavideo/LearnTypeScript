// function sayHelo(name?: string): string {
//     if (name === undefined) {
//         return "Helo Koma.";
//     } else {
//         return "Helo " + name + ".";
//     }
// }

// console.log(sayHelo("Trump"));
// console.log(sayHelo());

function sayHelo(name: string = "Koma"): string {
    return "Helo " + name + ".";
}
console.log(sayHelo("Trump"));
console.log(sayHelo());
