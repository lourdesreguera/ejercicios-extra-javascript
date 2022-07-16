const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"];

let numA = [];

for (const animal of animals) {
    numA.push(animal.match(/a/gi));
}

const [arr1, null1, null2, arr2] = numA;

const arr = [arr1.length, arr2.length];

let result = 0
for (const iterator of arr) {
    result+=iterator
}
console.log(result)
