// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (amountDollar,convRate) {
    const dollarToYen = amountDollar * convRate;
    return dollarToYen;
}

function fromEuroToDollar (amountEuro,convRate) {
    const euroToDollar = amountEuro * convRate;
    return euroToDollar;
}

function fromYenToPound (amountYen,convRate) {
    const yenToDollar = amountYen * convRate;
    return yenToDollar;
}

const eToD = fromEuroToDollar(3.5,1.07);
const dToY = fromDollarToYen (2,146.26);
const yToP = fromYenToPound (500000,.006);

console.log(eToD);
console.log(dToY);
console.log(yToP);
// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };