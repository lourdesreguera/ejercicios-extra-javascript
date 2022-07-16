const price1 = 8;
const ivaPrice = 1.21
const sendPrice = 4.95

function totalPrice(price) {
    return (price * ivaPrice + sendPrice).toPrecision(4);
}

console.log(totalPrice(8))