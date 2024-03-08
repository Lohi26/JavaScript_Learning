//used to insert the sub array elements into the single elements

const arr=[[10],20,30,[40,50,60,70,80],90,100];
console.log(arr.flat());

const arr1=[[[10,20,30],40],[50,60,[70,80,]],90,100];
console.log(arr1.flat());

const arr2=[[[10,20,30],40],[50,60,[70,80,]],90,100];
console.log(arr2.flat(2))

//OR

const arr3=[[[10,20,30],40],[50,60,[70,80,]],90,100];
console.log(arr3.flat().flat());




const account1 = {
    owner: "Lohitav Chandrasekaran",
    amount: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 26
};

const account2 = {
    owner: "Minnie Innocent",
    amount: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 19
};

const account3 = {
    owner: "Sanjay Karthik",
    amount: [200, -200, 340, -300, -20, 50, 400, -460,700],
    interestRate: 0.7,
    pin: 20
};

const account4 = {
    owner: "Padmavathi Kannappan",
    amount: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 6
};
const accounts=[account1,account2,account3,account4];


const array=accounts.map( account => account.amount);
console.log(array);

console.log(array.flat());

console.log(array.flat().reduce((acc,ele) => acc+ele,0));