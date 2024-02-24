//Use any datatype
//retrun any dataype
//also perform some functions like shortcircuting

console.log(0 || 1);
console.log(0||"Lohita");



//if undefined value if used in ternary operator then it will return the content which is present in the false section of ternary operator

const resturant={
    name: "Oxyz",
    location: "coimbatore",
    categories: ["Italian","vegetarian","pizzeria","Organic"],
    starterMenu:["bread omlet","pani puri","samosa"],
    mainMenu: ["pizza","pasta","rixato"],
};
resturant.number=10;
const num=resturant.number;
console.log(num || 7);

console.log(1 | 2);


// ||-------> the OR operator will return the first truthy value of all the operand 
// &&-------> AND operator will return the operand if it is the falsy value, if not present it will return the second truth value


console.log(123 && 23 && 1022);