let firstName;
let surname;

function splitName(name) {
    let divider = name.indexOf(' ');
    let firstName = name.substring(0, divider);
    let surname = name.substring(divider + 1, name.length);
    console.log(firstName);
    console.log(surname);
}

console.log(splitName('Lourdes Reguera'));