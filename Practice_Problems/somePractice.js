const arr=[1,2,3,4,5,6,7,8,9,10];
arr.unshift(0);
console.log(arr);
arr.unshift(10);
console.log(arr);


const arr1=[1,2,3,[4,5,6],7,[8,9,10]];
console.log(arr1.flat().map(ele => ele*10));


const arr2=[1,2,3,4];
const arr3=[5,6,7,8];
console.log(arr2.concat(arr3));


console.log(arr.includes(1));


console.log(arr.join(":"));
console.log(typeof arr.join());