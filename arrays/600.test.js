

// list is an array that holds a mix of data types
// we need to collect just the numbers and not the strings
// before running the tests, make a prediction and explanation about what you expect the function to return 
// fix anything that doesn't work

function collectNumbers(list) {

    const numbersOnly = [];
    // for (const item of list) { // equivalent to the next two lines
    for (let index = 0; index < list.length; index++) {
        const item = list[index];
        if (typeof item === 'number') {
            numbersOnly.push(item);
        }
    }
    return numbersOnly;
}
//console.log(collectNumbers([10.1,"hello",6.1,8.0, 9.7, 10.1,"hi", 3.5,"oops"]));

test ('only collects numbers in the array',() => {
    const currentOutput = collectNumbers([10.1,"hello",6.1,8.0, 9.7, 10.1,"hi", 3.5,"oops"]);
    //console.log(currentOutput);
    const targetOutput = [10.1,6.1,8.0, 9.7, 10.1, 3.5,];
    
    expect(currentOutput).toEqual(targetOutput);
});


