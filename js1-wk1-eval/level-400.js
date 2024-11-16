let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));
console.log(confession)


// a) How many function calls are there in this file?
// ans) 3
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// ans) it will hide the string value for secret and replace it with 'x' and repeats it the length of the secret
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// ans) 3 they are inclosed in a bracket
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// ans) 1 enclosed in a bracket
// e) What kind of statement is on line 7?
//ans) an assignment statement