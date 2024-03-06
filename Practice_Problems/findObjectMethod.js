const account1 = {
    owner: "Lohitav Chandrasekaran",
    amount: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 2619
};

const account2 = {
    owner: "Minnie Innocent",
    amount: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2619
};

const account3 = {
    owner: "Sanjay Karthik",
    amount: [200, -200, 340, -300, -20, 50, 400, -460,700],
    interestRate: 0.7,
    pin: 2619
};

const account4 = {
    owner: "Padmavathi Kannappan",
    amount: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 2619
};

const accounts=[account1,account2,account3,account4];

const findObject=accounts.find(accObj => accObj.amount.includes(700));
console.log(findObject);




const findObj=accounts.find( accO=>accO.pin===2619);
console.log(findObj);



//it can also work with objects you can find the object with the help of properties 
///interesting is it so!!!


for(const acc of accounts)
{
    if(acc.interestRate===1.5)
    console.log(acc);
}