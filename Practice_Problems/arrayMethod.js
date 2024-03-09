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



const sum=accounts.map(account => account.amount.
    filter(ele => ele>0)
    .reduce((acc,ele) => acc+ele,0))
    .reduce((acc,ele) => acc+ele,0);
console.log(sum);

const count=accounts
.flatMap(account => account.amount)
.filter(ele => ele>=1000).length;

//OR

const countAnother=accounts
.flatMap(account => account.amount)
.reduce((acc,ele) => ele>=1000?acc+1:acc,0);

console.log(count);
console.log(countAnother);

const {deposit,withdrawl}=accounts
    .flatMap(account => account.amount)
    .reduce((acc,ele) => {
        ele>0 ? acc.deposit+=ele : acc.withdrawl+=ele
        return acc;
    },{deposit:0 , withdrawl:0}
);
console.log(deposit,withdrawl);

console.log(account1);


//Input:this is a nice title
//Output: This Is a Nice Title

const str="this is a nice title";
const str1="this is a LONG title but not too long";
const str2="and here is a another title with EXAMPLE";

const fun=function(str){
    const ch=str.split(" ");
    const exception=["a","an","but" ,"is","the","or","with","on","in","not"];
    const output=ch
        .map(str => 
            exception.includes(str)
            ? str.toLowerCase()
            : str
                .slice(0,1)
                .toUpperCase()
                .concat(str.slice(1).toLowerCase()))
            .join(" ");
    console.log(output);
}
fun(str);
fun(str1);
fun(str2);