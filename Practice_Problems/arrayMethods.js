/// SLICE 

//method by using this method we can extract the part of array without changing the orginal array

const arr=[1,2,3,5,6,7];
 console.log(arr.slice(0,-4)); 
 console.log(arr);  
 //slice methods does not mutate the array
 //here 0 is the starting index and it will leave the last four elements of the array and then  then return it


 ///SPLICE 

 //methods mostly used to delete the elements in the array

 console.log(arr.splice(-2));
 console.log(arr);
//splice method will mutate theb array


 //REVERSE
 console.log(arr.reverse());
 console.log(arr);

//reverse methods will mutate the array




//CONCAT
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
console.log(arr1.concat(arr2)); //or
console.log(...arr1,...arr2);
console.log(arr1);
console.log(arr2);
//does not mutate the array 





//JOIN
console.log(arr1.join(", "));




//AT
const nums=[1,2,3,4,5,6,7,8,9,10];
console.log(nums[0]); //or
console.log(nums.at(0));

//if we want last element of the array or travel from back of the array and also for method chaining we can use AT method
//if quickly want the element of the array we can use traditional method

console.log(nums[nums.length-1]); //or
console.log(nums.slice(-1)[0]); //or
console.log(nums.at(-1));

//AT also works on the string


const str="Lohita";
console.log(str.at(0)+" "+str.at(-1));