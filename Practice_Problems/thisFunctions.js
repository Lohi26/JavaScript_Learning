const obj={
    name:"Lohita",
    age:21,
    occupation:"software engineer",
    arr:[],
    details(maritalStatus,currentSalary){
        // console.log(`Name : ${this.name}`);
        // console.log(`Age : ${this.age}`);
        // console.log(`Occupation : ${this.occupation}`);
        // console.log(`${this.name} is ${maritalStatus=="yes"?"Married":"Not Married"}`);
        // console.log(`Current salary is ${currentSalary}`);
        this.arr.push(maritalStatus,currentSalary,1,2,3,4);
    }
};


const object ={
    arr:[]   //should use the same name as of the previous property of the previous object
};
obj.details("no",50000);
const func=obj.details;
// func.call(object,"no",600000);
// console.log(object);


const app=["yes",500000];
func.apply(object,app);
console.log(object);

//can use spread operator or else apply for storing the arr in the object's empty property
// ... or call
// ... and apply gives error
//this keyword in regular function is "undefined"