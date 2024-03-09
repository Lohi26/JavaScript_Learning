//fill method mutates the array 
//the fill method contains array element,start index and end index

const arr=new Array(10);

console.log(arr);

arr.fill(1);

console.log(arr);


arr.fill(2,3);
console.log(arr);

arr.fill(10,1,5);

console.log(arr);