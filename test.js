// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
/*test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});*/

test('converts EuroToDollar',() => {
    let checkEuroToDollar = fromEuroToDollar (3.5,1.07);
    expect(checkEuroToDollar).toBe(3.745);
}
)
test('converts DollarToYen',() => {
    let checkDollarToYen = fromDollarToYen (2,146.26);
    expect(checkDollarToYen).toBe(292.52);
}
)
test('converts YenToPound',() => {
    let checkYenToPound = fromYenToPound (500000,.006);
    expect(checkYenToPound).toBe(3000);
}
)