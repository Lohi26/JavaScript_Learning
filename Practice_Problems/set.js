//unique values 
//no duplicate values

//1.size()-------->returns number
//2.add(" ")------>returns the set
//3.delete(" ")--->returns true or false
//4.has(" ")------> returns true or false
//5.clear()-------> returns Functin


const arr=new Set([1,1,2,3,4,5,4,7,8]);
console.log(arr.add(10));
console.log(arr.delete(5));
console.log(arr.clear);


//for converting array to set


const nums=[1,2,3,4,5,6,7,8,9,10];
const set=new Set(nums);
console.log(set);


//for converting set to array

const set1=[...new Set(nums)];
console.log(set1);