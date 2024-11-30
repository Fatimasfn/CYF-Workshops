// Fill in the code below so that the tests pass.

const people = [];

people.push({
    "name": "Saqib",
    "favourite_food": "salad",
});

people.push({
    "name": "Shadi",
    "favourite_food": "mango",
});

people.push({
    "name": "Navid",
    "favourite_food": "macarons",
});

const favouriteFoods = [];

// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

//note to self:this is the solution, look into it further
 /*method 1 
 for (const person of people) {
       favouriteFoods.push(person.favourite_food)
    }*/

//method 2
for(let i=0; i < people.length; i++){
    favouriteFoods.push(people[i].favourite_food)
    
}


console.assert(favouriteFoods.length === 3);
console.assert(favouriteFoods.includes("salad"));
console.assert(favouriteFoods.includes("mango"));
console.assert(favouriteFoods.includes("macarons"));
