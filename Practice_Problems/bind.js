const obj={
    name:"Lohita",
    age:21,
    occupation:"software engineer",
    arr:[],
    details(maritalStatus,currentSalary){
        // console.log(`Name : ${this.name}`);
        // console.log(`Age : ${this.age}`);
        // console.log(`Occupation : ${this.occupation}`);
        console.log(`He/She is ${maritalStatus=="yes"?"Married":"Not Married"}`);
        console.log(`Current salary is ${currentSalary}`);
        this.arr.push(maritalStatus,currentSalary,1,2,3,4);
    }
};
const object={
    arr:[]
};
const func=obj.details;
const newFunc=func.bind(object,"yes",1000000);
newFunc();
console.log(object);




obj.education="Bachlore of Engineering";
obj.birthYear=2003;
obj.yesOrNo=function (){
    console.log(this);
    if(this.age>18)
    console.log("He/She is a major citizen");
    else
    console.log("He/She is a minor");
};
obj.yesOrNo();
console.log(obj);


const alone=function(stressRate){
    console.log(`Your stress rate is: ${stressRate}`);
    if(stressRate>100)
    return "Trust me! being alone is far better for you";
    else
    return "I think so you stay with people for some period";
};
const fixed=alone.bind(null,1000);
console.log(fixed());
console.log(alone(20));